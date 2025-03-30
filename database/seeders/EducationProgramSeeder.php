<?php

namespace Database\Seeders;

use App\Models\EducationProgram;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EducationProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EducationProgram::insert([
            [
                'title' => 'Прикладна математика',
                'level' => 'Бакалавр',
                'form' => 'Денна',
                'description' => 'Фундаментальна математика, програмування, статистика.',
                'file_path' => 'education-programs/applied-math.pdf',
            ],
            [
                'title' => 'Комп’ютерна математика',
                'level' => 'Магістр',
                'form' => 'Заочна',
                'description' => 'Математичне моделювання та цифрові технології.',
                'file_path' => 'education-programs/computer-math.pdf',
            ],
        ]);
    }
}
