<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('education_programs', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Назва програми
            $table->string('level'); // Бакалавр, Магістр і т.д.
            $table->string('form');  // Денна, Заочна
            $table->text('description');
            $table->string('file_path')->nullable(); // Шлях до PDF
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('education_programs');
    }
};
