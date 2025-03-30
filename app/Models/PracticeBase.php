<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PracticeBase extends Model
{
    protected $fillable = ['name', 'location', 'website', 'description'];

    public function documents()
    {
        return $this->morphMany(Document::class, 'documentable');
    }
}
