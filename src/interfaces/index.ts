export type TRequestStatus = 'initial' | 'pending' | 'success' | 'error';
export type TViewType = 'chess' | 'grid';
export type TBidType = 'rent' | 'ownership';
export type TStatus = 'NEW' | 'PROCESSING' | 'DONE' | 'REJECTED'

export interface ISupply {
    maxSupply: string;
    remaningSupply: string;
}

export interface ITicket {
    address: string
    type: 'buy' | 'rent'
    createdAt: string
    productId: string
    resultImageLinks: string[]
    sourceImageLinks: string[]
    status: TStatus
    updatedAt: string
    __v: number
    _id: string
}


export interface IProduct {
    _id: string,
    rentProductId: string,
    name: string,
    description: string,
    priceUSD: number,
    rentPriceUSD: number,
    contractId: string,
    tokenTypeId: string,
    images: string[],
    active: boolean
    __v: number
    __supply: ISupply;
}


export interface IProfile {
    address: string,
    name: string
    avatar: string
    email: string
    instagramLink: string
    facebookLink: string
    twitterLink: string
    tiktokLink: string
    avatarUrl: string
}