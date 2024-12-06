<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable = ['user_id']; // Ensure user_id is fillable

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
