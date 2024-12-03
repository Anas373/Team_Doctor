<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rendezvous extends Model
{
    
    //
    protected $table="rendezvous";


    protected $fillable = [
        'user_id',
        'doctor_id',
        'appointment_date',
        'notes',
    ];

    // Relation avec le patient
    public function patient()
    {
        return $this->belongsTo(User::class, 'id');
    }

    // Relation avec le docteur
    public function doctor()
    {
        return $this->belongsTo(Doctor::class, 'doctor_id');
    }
}
