<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Liste tous les patients.
     */
    public function index()
    {
        $patients = Patient::with('user')->get();
        return response()->json($patients, 200);
    }

    /**
     * Crée un nouveau patient.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id', // Vérifie que l'utilisateur existe
        ]);

        $patient = Patient::create($validated);

        return response()->json($patient, 201);
    }

    /**
     * Affiche les détails d'un patient.
     */
    public function show(Patient $patient)
    {
        return response()->json($patient->load('user'), 200);
    }

    /**
     * Met à jour un patient.
     */
    public function update(Request $request, Patient $patient)
    {
        $validated = $request->validate([
            'user_id' => 'exists:users,id', // Vérifie que l'utilisateur existe
        ]);

        $patient->update($validated);

        return response()->json($patient, 200);
    }

    /**
     * Supprime un patient.
     */
    public function destroy(Patient $patient)
    {
        $patient->delete();

        return response()->json(['message' => 'Patient deleted successfully'], 204);
    }
}
