<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show()
    {
        $response = Http::get('https://backend.zonneplan.nl/cms/graphql', [
            'query' => Storage::get('graphql/energy-prices.graphql'),
        ]);

        $prices = $response->json('data.energyData.electricity.hours');

        return Inertia::render('Dashboard', [
            'prices' => collect($prices)->reverse()->values(),
        ]);
    }
}
