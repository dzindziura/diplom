<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseMap extends Model
{
    protected $fillable = [
        'title',
        'semester',
        'program',
        'professor',
        'link'
        ];
    public function professor()
    {
        return $this->belongsTo(Professor::class);
    }

    public function documents()
    {
        return $this->morphMany(Document::class, 'documentable');
    }

}
