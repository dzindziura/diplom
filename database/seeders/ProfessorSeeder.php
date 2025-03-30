<?php

namespace Database\Seeders;

use App\Models\Professor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfessorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Professor::updateOrCreate(
            ['email' => 'ivan.ivanenko@lpnu.ua'],
            [
                'name' => 'Професор Іван Іванович Іваненко',
                'slug' => 'ivan-ivanovych-ivanenko',
                'title' => 'доктор фізико-математичних наук, професор',
                'image' => 'professors/ivanenko.jpg',
                'degree_id' => 1,
                'biography' => 'Іван Іванович Іваненко працює на кафедрі з 2005 року. Має понад 100 наукових праць.',
                'research_interests' => 'Диференціальні рівняння, математичне моделювання, аналітичні методи.',
                'courses' => 'Вища математика, Диференціальні рівняння, Теорія ймовірностей',
                'publications' => '1. Іваненко І.І. Методи розв’язання..., 2. Іваненко І.І. Збірник задач...',
                'is_director' => true,
                'position' => 2,
            ]
        );

        Professor::updateOrCreate(
            ['email' => 'olena.sydorenko@lpnu.ua'],
            [
                'name' => 'Доцент Олена Петрівна Сидоренко',
                'slug' => 'dozent-olena-petrivna-sydorenko',
                'title' => 'кандидат фізико-математичних наук, доцент',
                'image' => 'professors/sydorenko.jpg',
                'degree_id' => 2,
                'biography' => 'Олена Петрівна є фахівцем з прикладної математики.',
                'research_interests' => 'Чисельні методи, оптимізація, машинне навчання.',
                'courses' => 'Чисельні методи, Статистика, Аналіз даних',
                'publications' => '1. Сидоренко О.П. Основи чисельного аналізу..., 2. Практикум із статистики...',
                'is_director' => false,
                'position' => 1,
            ]
        );
    }
}
