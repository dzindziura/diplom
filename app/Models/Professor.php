<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Professor extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'title',
        'email',
        'image',
        'degree_id',
        'biography',
        'research_interests',
        'courses',
        'publications',
        'is_director',
        'position',
    ];

    public function degree()
    {
        return $this->belongsTo(Degree::class);
    }

    protected static function booted(): void
    {
        static::creating(function ($professor) {
            if (empty($professor->slug)) {
                $professor->slug = Str::slug($professor->name);
            }
        });

        static::updating(function ($professor) {
            if ($professor->isDirty('name')) {
                $professor->slug = Str::slug($professor->name);
            }
        });
    }
}
