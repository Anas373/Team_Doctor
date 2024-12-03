<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = ['email', 'password', 'name']; // Allow mass assignment
    // Relation : Un docteur peut avoir plusieurs rendez-vous
    
    public function appointments(): HasMany
    {
        return $this->hasMany(Rendezvous::class, 'doctor_id');
    }
}
