export type TRequestStatus = 'initial' | 'pending' | 'success' | 'error';
export type TViewType = 'chess' | 'grid';

export interface ISupply {
    maxSupply: string;
    remaningSupply: string;
}


export interface IProduct {
    _id: string,
    name: string,
    description: string,
    priceUSD: number,
    contractId: string,
    tokenTypeId: string,
    images: string[],
    active: boolean
    __v: number
    __supply: ISupply;
}


export interface IProfile {
    name: string
    avatar: string
    email: string
    instagramLink: string
    facebookLink: string
    twitterLink: string
    tiktokLink: string
    avatarUrl: string
}