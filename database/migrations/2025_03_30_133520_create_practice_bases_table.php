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
        Schema::create('practice_bases', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Назва установи
            $table->string('location')->nullable(); // Місто або адреса
            $table->string('website')->nullable(); // Посилання на сайт
            $table->text('description')->nullable(); // Інформація
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('practice_bases');
    }
};
