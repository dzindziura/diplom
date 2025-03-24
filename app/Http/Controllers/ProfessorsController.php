<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use Inertia\Inertia;

class ProfessorsController extends Controller
{
    public function index()
    {
        $professors = Professor::with('degree')->get();
        return Inertia::render('professors', [
            'professors' => $professors,
        ]);
    }

    public function show(string $slug)
    {
        $professor = Professor::with('degree')->where('slug', $slug)->firstOrFail();

        return Inertia::render('Professors/Show', [
            'professor' => $professor,
        ]);
    }

}
