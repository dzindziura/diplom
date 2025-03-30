<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/professors', [\App\Http\Controllers\ProfessorsController::class, 'index'])->name('home');
Route::get('/professors/{slug}', [\App\Http\Controllers\ProfessorsController::class, 'show'])->name('professors.show');
Route::get('/history', [App\Http\Controllers\HomeController::class, 'history'])->name('history');
Route::get('/leadership', [App\Http\Controllers\HomeController::class, 'leadership'])->name('leadership');
Route::get('/staff', [App\Http\Controllers\HomeController::class, 'staff'])->name('staff');

Route::get('/education/programs', [App\Http\Controllers\HomeController::class, 'EducationPrograms'])->name('EducationPrograms');
Route::get('/education/map', [App\Http\Controllers\HomeController::class, 'CourseMap'])->name('course.map');

Route::get('/education/courses/{course}', [App\Http\Controllers\HomeController::class, 'Course'])->name('course.view');

Route::get('/education/practice', [App\Http\Controllers\HomeController::class, 'practiceBases'])->name('practice.bases');

Route::get('/education/international', [App\Http\Controllers\HomeController::class, 'international'])->name('education.international');
Route::get('/science', [App\Http\Controllers\HomeController::class, 'science'])->name('science');
Route::get('/accreditation', [App\Http\Controllers\HomeController::class, 'accreditation'])->name('accreditation');
Route::get('/contacts', [App\Http\Controllers\HomeController::class, 'contacts'])->name('contacts');

Route::get('/gallery', [App\Http\Controllers\HomeController::class, 'gallery'])->name('gallery');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
