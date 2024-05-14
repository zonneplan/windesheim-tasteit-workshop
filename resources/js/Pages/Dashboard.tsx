import Layout from "../Layouts/Layout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { DateTime } from "luxon";

export default function Dashboard({ prices }: PageProps) {
    const maxPrice = Math.max(
        ...prices.map((price) => price.priceTotalTaxIncluded),
    );

    const colorForPricingProfile = (profileColor: string): string => {
        if (profileColor === "high") {
            return "bg-orange-500";
        }

        if (profileColor === "normal") {
            return "bg-yellow-500";
        }

        return "bg-green-500";
    };

    return (
        <Layout>
            <Head title="Dashboard" />

            <div>
                <div className="flex justify-between font-bold mb-3">
                    <span>Tijdstip</span>
                    <span>Prijs p/kWh</span>
                </div>

                <div className="grid gap-y-1">
                    {prices.map((price) => (
                        <div
                            key={price.dateTime}
                            className="flex justify-between"
                        >
                            <div>
                                {DateTime.fromISO(price.dateTime)
                                    .setLocale("nl")
                                    .toFormat("cccc t")}
                            </div>

                            <div className="flex justify-between items-center gap-x-2">
                                <span className="tabular-nums font-bold">
                                    &euro;{" "}
                                    {(
                                        price.priceTotalTaxIncluded / 10000000
                                    ).toFixed(3)}
                                </span>

                                <div className="bg-gray-200 w-32 h-4 rounded overflow-hidden">
                                    <div
                                        className={`${colorForPricingProfile(price.pricingProfile)} rounded h-4`}
                                        style={{
                                            width: `${(price.priceTotalTaxIncluded / maxPrice) * 100}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
