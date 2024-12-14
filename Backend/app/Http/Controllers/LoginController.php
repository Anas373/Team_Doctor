<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class LoginController extends Controller
{
    /**
     * Handle the login request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        // Validate the request
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Attempt to find the user
        $user = User::where('email', $request->email)->first();

        // Verify user and password
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password.',
            ], 401);
        }

        // Generate a personal access token
        $token = $user->createToken('API Token')->plainTextToken;

        // Return a successful response with the token
        return response()->json([
            'message' => 'Login successful.',
            'user' => $user,
            'token' => $token,
        ]);
    }

    /**
     * Handle logout request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
   




     public function logout(Request $request)
     {
         // Supprime la session de l'utilisateur
         $request->session()->invalidate();
 
         // Régénère le jeton CSRF pour la sécurité
         $request->session()->regenerateToken();
 
         // Retourne une réponse indiquant la déconnexion réussie
         return response()->json(['success' => true, 'message' => 'Déconnexion réussie']);
     }
}
