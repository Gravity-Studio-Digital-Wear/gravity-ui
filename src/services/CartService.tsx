import {IProduct, TBidType} from "../interfaces";
import {action, computed, makeAutoObservable, observable} from "mobx";
import {ServiceContainer} from "../core/ServiceContainer";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {create, persist} from 'mobx-persist'
import {ModalService} from "./ModalService";
import {AuthService} from "./AuthService";
import {sendAmplitudeData} from '../utils/amplitude'

type TCartItem = {
    product: IProduct,
    quantity: number,
    type: TBidType,
}

export class CartService {
    @persist('map')
    @observable
    cart: Map<string, TCartItem> = new Map<string, TCartItem>();

    modalService: ModalService;
    authService: AuthService;

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this);

        const hydrate = create({
            storage: localStorage,
            jsonify: true
        })

        hydrate('CartService', this);


        this.authService = sc.get(AuthService)
        this.modalService = sc.get(ModalService)
    }

    @action
    add(product: IProduct, bidType: TBidType, qty?: number) {
        let cartItem = this.cart.get(product._id)

        if (!cartItem) {
            cartItem = {
                product,
                quantity: qty ? +qty : 1,
                type: bidType
            };
            sendAmplitudeData('E_CART_ADD', {
                product: product._id,
                product_name: product.name
            })
        } else {
            cartItem.quantity = qty ? +qty : +cartItem.quantity + 1;
        }


        cartItem.type = bidType;

        this.cart.set(product._id, cartItem)
    }


    @action
    changeProductBidType(product: IProduct, type: TBidType) {
        let cartItem = this.cart.get(product._id)

        if (!cartItem) {
            return;
        }

        cartItem.type = type;

        this.cart.set(product._id, cartItem)
    }

    @action
    changeProductQty(product: IProduct, qty: number, type: TBidType) {
        let cartItem = this.cart.get(product._id)

        if (!cartItem) {
            cartItem = {
                product,
                quantity: 0,
                type: type || 'rent'
            };
        }

        if (qty === 0) {
            this.cart.delete(product._id)
            return;
        } else {
            cartItem.quantity = +qty;
        }

        this.cart.set(product._id, cartItem)
    }

    @action
    remove(product: IProduct) {
        let cartItem = this.cart.get(product._id)

        cartItem.quantity = cartItem.quantity - 1;

        if (cartItem.quantity === 0) {
            this.cart.delete(product._id)
            sendAmplitudeData('E_CART_REMOVE', {
                product: product._id,
                product_name: product.name
            })
        } else {
            this.cart.set(product._id, cartItem)
        }
    }

    @action
    clear(product?: IProduct) {
        if (!product) {
            this.cart.clear();

            return;
        }

        this.cart.delete(product._id)
    }


    public getProductCartItem(product: IProduct): TCartItem {
        let cartItem = this.cart.get(product._id)

        if (!cartItem) {
            cartItem = {
                product,
                quantity: 0,
                type: 'rent'
            };
        }

        return cartItem;
    }

    @computed
    public get isOnlyRent() {
        return [...this.cart.values()].every(r => r.type === 'rent');
    }

    @computed
    public get productsCount(): number {
        return [...this.cart.values()].reduce((acc, r) => acc + r.quantity, 0)
    }

    @computed
    public get total(): number {
        return [...this.cart.values()].reduce((acc, r) => {
            const amount = r.type === 'rent' ? r.product.rentPriceUSD : r.product.priceUSD;

            return acc + (amount * r.quantity);
        }, 0)
    }

    @computed
    public get totalAfterDiscount(): number {
        return this.total;
    }

    @action
    public opensea() {
        sendAmplitudeData('E_GO_OPENSEA')
    }

    @action
    public checkout() {
        if (!this.authService.isAuthorized) {
            this.modalService.open('login')

            return
        }

        sendAmplitudeData('E_CHECKOUT_BEGIN')
        
        const cart = [...this.cart.values()].map(({product, type, quantity}) => ({
            productId: type === 'rent' ? product.rentProductId : product._id,
            quantity: quantity,
        }))

        return http.post<{ success: boolean, checkoutUrl: string }>(ENDPOINTS.Cart.checkout, {cart})
            .then((res) => {
                this.cart.clear();

                if (res.success) {
                    sendAmplitudeData('E_CHECKOUT_REDIRECT_TO_STRIPE')
                    // @ts-ignore
                    window.location = res.checkoutUrl
                } else {
                    sendAmplitudeData('E_CHECKOUT_ERROR')
                }
            })
    }
}