<?php

namespace Database\Seeders;

use App\Models\CourseMap;
use App\Models\Professor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseMapSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CourseMap::insert([
            [
                'title' => 'Диференціальні рівняння',
                'semester' => '3',
                'program' => 'Прикладна математика',
                'professor_id' => Professor::inRandomOrder()->first()->id,
                'link' => 'https://example.com/syllabus/diff-eq.pdf',
            ],
            [
                'title' => 'Статистика та аналіз даних',
                'semester' => '4',
                'program' => 'Комп’ютерна математика',
                'professor_id' => Professor::inRandomOrder()->first()->id,
                'link' => null,
            ],
        ]);
    }
}
