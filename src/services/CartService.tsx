import {IProduct} from "../interfaces";
import {action, computed, makeAutoObservable, observable} from "mobx";
import {ServiceContainer} from "../core/ServiceContainer";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {create, persist} from 'mobx-persist'


type TCartItem = {
    product: IProduct,
    quantity: number
}

export class CartService {
    @persist('map')
    @observable
    cart: Map<string, TCartItem> = new Map<string, TCartItem>();

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this);

        const hydrate = create({
            storage: localStorage,
            jsonify: true
        })

        hydrate('CartService', this);
    }

    @action
    add(product: IProduct, qty?: number) {
        let cartItem = this.cart.get(product._id)

        if (!cartItem) {
            cartItem = {
                product,
                quantity: qty ? +qty : 1
            };
        } else {
            cartItem.quantity = qty ? +qty : +cartItem.quantity + 1;
        }

        this.cart.set(product._id, cartItem)
    }

    @action
    changeProductQty(product: IProduct, qty: number) {
        let cartItem = this.cart.get(product._id)

        if (!cartItem) {
            cartItem = {
                product,
                quantity: 0
            };
        }

        if (qty === 0) {
            this.cart.delete(product._id)
            return;
        } else  {
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
                quantity: 0
            };
        }

        return cartItem;
    }

    @computed
    public get productsCount(): number {
        return [...this.cart.values()].reduce((acc, r) => acc + r.quantity, 0)
    }

    @computed
    public get total(): number {
        return [...this.cart.values()].reduce((acc, r) => (acc + (r.quantity * r.product.priceUSD)), 0)
    }

    @computed
    public get totalAfterDiscount(): number {
        return [...this.cart.values()].reduce((acc, r) => acc + (r.quantity * r.product.priceUSD), 0)
    }

    @action
    public checkout() {
        const cart = [...this.cart.values()].map(({product, quantity}) => ({
            productId: product._id,
            quantity
        }))

        return http.post<{ success: boolean, checkoutUrl: string }>(ENDPOINTS.Cart.checkout, {cart})
            .then((res) => {
                if (res.success) {

                    // @ts-ignore
                    window.location = res.checkoutUrl
                }
            })
    }
}