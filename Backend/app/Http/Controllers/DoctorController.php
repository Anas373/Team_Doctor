<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $doctors = Doctor::all(); // Récupère tous les docteurs
        return response()->json($doctors, 200);
    }

 

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:doctors,email',
            'password' => 'required|string|min:6',
        ]);

        $doctor = Doctor::create($validated);

        return response()->json($doctor, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Doctor $doctor)
    {
        return response()->json($doctor, 200);
    }

    /**
     * Show the form for editing the specified resource.
     * (Non utilisé pour les API RESTful)
     */
    public function edit(Doctor $doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Doctor $doctor)
    {
        $validated = $request->validate([
            'name' => 'string|max:255',
            'email' => 'email|unique:doctors,email,' . $doctor->id,
            'password' => 'string|min:6',
        ]);

        $doctor->update($validated);

        return response()->json($doctor, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor)
    {
        $doctor->delete();

        return response()->json(['message' => 'Doctor deleted successfully'], 204);
    }
}
