<?php 
    namespace App\Http\Controllers;



use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Validation rules
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email',
            'name' => 'required|string|max:255',
            'password' => 'required|min:6|confirmed',
            'role' => 'required|in:doctor,patient', // Ensure role is required and must be either 'doctor' or 'patient'
        ]);

        // Add doctor-specific fields conditionally
        $validator->sometimes('specialization', 'required|string', function ($input) {
            return $input->role == 'doctor';
        });

        $validator->sometimes('experience', 'required|integer', function ($input) {
            return $input->role == 'doctor';
        });

        $validator->sometimes('image', 'required|string', function ($input) {
            return $input->role == 'doctor';
        });

        // Check for validation failures
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()], 422);
        }

        // Create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role, // Set the role
            'specialization' => $request->role == 'doctor' ? $request->specialization : null,
            'experience' => $request->role == 'doctor' ? $request->experience : null,
            'image' => $request->role == 'doctor' ? $request->image : null,
        ]);

        return response()->json(['message' => 'Registration successful', 'user' => $user], 201);
    }
}
