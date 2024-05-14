import Layout from "../Layouts/Layout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ prices }: PageProps) {
    return (
        <Layout>
            <Head title="Dashboard" />

            <p>Hier komt je dashboard...</p>
        </Layout>
    );
}
