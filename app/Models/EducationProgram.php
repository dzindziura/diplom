<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EducationProgram extends Model
{
    protected $fillable = [
        'title',
        'level',
        'form',
        'description',
        'file_path',
    ];
}
