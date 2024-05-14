import Layout from "../Layouts/Layout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { DateTime } from "luxon";

export default function Dashboard({ prices }: PageProps) {
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
                            <span>
                                {DateTime.fromISO(price.dateTime)
                                    .setLocale("nl")
                                    .toFormat("cccc t")}
                            </span>

                            <span className="tabular-nums">
                                &euro;{" "}
                                {(
                                    price.priceTotalTaxIncluded / 10000000
                                ).toFixed(3)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
