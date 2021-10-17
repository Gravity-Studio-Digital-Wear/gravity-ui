import {IProduct} from "../interfaces";
import {action, computed, makeAutoObservable, observable} from "mobx";
import {ServiceContainer} from "../core/ServiceContainer";

type TCartItem = {
    product: IProduct,
    quantity: number
}

export class CartService {
    @observable cart: Map<string, TCartItem> = new Map<string, TCartItem>();

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this);
    }

    @action
    add(product: IProduct) {
        let cartItem = this.cart.get(product._id)

        if (!cartItem) {
            cartItem = {
                product,
                quantity: 1
            };
        } else {
            cartItem.quantity = cartItem.quantity + 1;
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

    @computed
    public get productsCount(): number {
        return [...this.cart.values()].reduce((acc, r) => acc + r.quantity, 0)
    }

    @computed public get total(): number {
        return [...this.cart.values()].reduce((acc, r) => (acc + (r.quantity * r.product.priceUSD)), 0)
    }

    @computed public get totalAfterDiscount(): number {
        return [...this.cart.values()].reduce((acc, r) => acc + (r.quantity * r.product.priceUSD), 0)
    }
}