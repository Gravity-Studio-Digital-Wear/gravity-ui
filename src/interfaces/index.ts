export type TRequestStatus = 'initial' | 'pending' | 'success' | 'error';
export type TViewType = 'chess' | 'grid';

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
}