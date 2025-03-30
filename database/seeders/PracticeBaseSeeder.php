<?php

namespace Database\Seeders;

use App\Models\PracticeBase;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PracticeBaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PracticeBase::insert([
            [
                'name' => 'EPAM Systems',
                'location' => 'Львів',
                'website' => 'https://www.epam.com',
                'description' => 'Міжнародна компанія, яка приймає студентів на практику з програмування.',
            ],
            [
                'name' => 'SoftServe',
                'location' => 'Львів',
                'website' => 'https://www.softserveinc.com',
                'description' => 'Місце проходження практики для студентів спеціальності "Комп’ютерна математика".',
            ],
        ]);
    }
}
