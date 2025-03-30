<?php

namespace Database\Seeders;

use App\Models\Degree;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DegreeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Degree::insert([
            ['name' => 'кандидат фізико-математичних наук'],
            ['name' => 'доктор фізико-математичних наук'],
            ['name' => 'кандидат технічних наук'],
            ['name' => 'доктор технічних наук'],
        ]);
    }
}
