<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Document extends Model
{
    protected $fillable = ['name', 'file_path'];

    public function documentable()
    {
        return $this->morphTo();
    }

    // Доступний URL
    public function getUrlAttribute()
    {
        return Storage::url($this->file_path);
    }
}
