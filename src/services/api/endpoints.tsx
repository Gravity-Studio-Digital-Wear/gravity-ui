const OAuth = {
    challenge: '/api/auth/challenge',
    login: '/api/auth/login',
    profile: '/api/auth/profile'
}

const Warehouse = {
    products: '/api/warehouse/products',
    product: '/api/warehouse/products/:id',
    supply: '/api/warehouse/products/:id/supply',

    my: '/api/warehouse/products/my'
}

const Wardrobe = {
    items: '/api/wardrobe'
}

const Cart = {
    checkout: '/api/checkout/session'
}

export const ENDPOINTS = {
    OAuth,
    Warehouse,
    Wardrobe,
    Cart
}