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
        Schema::create('course_maps', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // назва курсу
            $table->string('semester'); // семестр (1, 2, 3... або назва)
            $table->string('program'); // назва освітньої програми
            $table->foreignId('professor_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();
            $table->string('link')->nullable(); // посилання на силлабус / PDF
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_maps');
    }
};
