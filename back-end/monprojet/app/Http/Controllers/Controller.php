<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserRegistrationMail;

class RegisterController extends Controller
{
   //linscription
    public function register(Request $request)
    {
        // اles donne enristrer est ce que correct
        $validated = $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
        ]);

        // lajout dutilisateur a base donner
        $user = User::create([
            'username' => 'default_username',
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => 'patient', 
            'created_at' => now(),
        ]);
        //envoie a email
        Mail::to($user->email)->send(new UserRegistrationMail($user));

        
        return response()->json(['message' => 'votre compte est cree avec succes ,verfier votre courrier electronique '], 201);
    }
}
