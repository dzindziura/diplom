<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/professors', [\App\Http\Controllers\ProfessorsController::class, 'index'])->name('home');
Route::get('/professors/{slug}', [\App\Http\Controllers\ProfessorsController::class, 'show'])->name('professors.show');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
