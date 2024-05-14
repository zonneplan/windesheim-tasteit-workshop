export interface EnergyPrice {
    dateTime: string;
    pricingProfile: string;
    priceEnergyTaxes: number;
    priceInclHandlingVat: number;
    priceTotalTaxIncluded: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    prices: Array<EnergyPrice>;
};
