<?php

namespace App\Http\Controllers;

use App\Models\CourseMap;
use App\Models\EducationProgram;
use App\Models\GalleryImage;
use App\Models\PracticeBase;
use App\Models\Professor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', []);
    }

    public function history()
    {
        return Inertia::render('History', []);
    }

    public function leadership()
    {
        $professors = Professor::with('degree')
            ->where('is_director', true)
            ->orderBy('position')
            ->get()
            ->map(function ($professor) {
                return [
                    'name' => $professor->name,
                    'title' => $professor->title,
                    'degree' => optional($professor->degree)->name,
                    'email' => $professor->email,
                    'image' => $professor->image ? Storage::url($professor->image) : null,
                ];
            });

        return Inertia::render('Leadership', [
            'professors' => $professors,
        ]);
    }

    public function staff()
    {
        $professors = Professor::with('degree')
            ->orderBy('position')
            ->get()
            ->map(function ($professor) {
                return [
                    'name' => $professor->name,
                    'title' => $professor->title,
                    'degree' => optional($professor->degree)->name,
                    'email' => $professor->email,
                    'image' => $professor->image ? Storage::url($professor->image) : null,
                ];
            });

        return Inertia::render('Staff', [
            'professors' => $professors,
        ]);
    }

    public function EducationPrograms()
    {
        return Inertia::render('EducationPrograms', [
            'educationPrograms' => EducationProgram::all()->map(function ($program) {
                return [
                    'title' => $program->title,
                    'level' => $program->level,
                    'form' => $program->form,
                    'description' => $program->description,
                    'file_path' => $program->file_path ? Storage::url($program->file_path) : null,
                ];
            }),
        ]);
    }

    public function CourseMap()
    {
        return Inertia::render('CourseMap', [
            'courses' => CourseMap::orderBy('semester')->with('professor')->get(),
        ]);
    }

    public function Course(Request $request, CourseMap $course)
    {
        return Inertia::render('CourseView', [
            'course' => [
                'title' => $course->title,
                'semester' => $course->semester,
                'program' => $course->program,
                'link' => $course->link,
                'professor' => optional($course->professor)->name,
                'documents' => $course->documents->map(fn($doc) => [
                    'name' => $doc->name,
                    'url' => Storage::url($doc->file_path),
                ]),
            ],

        ]);
    }

    public function practiceBases()
    {
        return Inertia::render('PracticeBase', [
            'bases' => PracticeBase::with('documents')->get()->map(fn($base) => [
                'name' => $base->name,
                'location' => $base->location,
                'website' => $base->website,
                'description' => $base->description,
                'documents' => $base->documents->map(fn($doc) => [
                    'name' => $doc->name,
                    'url' => Storage::url($doc->file_path),
                ]),
            ]),
        ]);
    }

    public function international() {
        return Inertia::render('InternationalRelations');
    }

    public function science() {
        return Inertia::render('Science');
    }

    public function accreditation() {
        return Inertia::render('Accreditation');
    }

    public function contacts() {
        return Inertia::render('Contacts');
    }

    public function gallery()
    {
        return Inertia::render('Gallery', [
            'images' => GalleryImage::all()->map(fn($img) => [
                'url' => Storage::url($img->file_path),
                'title' => $img->title,
            ]),
        ]);
    }
}
