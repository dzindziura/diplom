<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Degree extends Model
{
    protected $fillable = ['name'];

    public function professors()
    {
        return $this->hasMany(Professor::class);
    }

}
