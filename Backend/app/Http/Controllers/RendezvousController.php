<?php

namespace App\Http\Controllers;

use App\Models\Rendezvous;
use Illuminate\Http\Request;

class RendezvousController extends Controller
{
    // GET: Retrieve all rendezvous
    public function index()
    {
        $rendezvous = Rendezvous::all(); // You can add pagination here
        return response()->json($rendezvous);
    }

    // POST: Create a new rendezvous
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer',
            'doctor_id' => 'required|integer',
            'appointment_date' => 'required|date',
        ]);

        $rendezvous = Rendezvous::create([
            'user_id' => $request->user_id,
            'doctor_id' => $request->doctor_id,
            'appointment_date' => $request->appointment_date,
        ]);

        return response()->json($rendezvous, 201); // Return the created rendezvous with a 201 status code
    }

    // PUT: Update an existing rendezvous
    public function update(Request $request, $id)
    {
        $rendezvous = Rendezvous::findOrFail($id);

        $request->validate([
            'user_id' => 'required|integer',
            'doctor_id' => 'required|integer',
            'appointment_date' => 'required|date',
        ]);

        $rendezvous->update([
            'user_id' => $request->user_id,
            'doctor_id' => $request->doctor_id,
            'appointment_date' => $request->appointment_date,
        ]);

        return response()->json($rendezvous);
    }

    // DELETE: Remove a rendezvous
    public function destroy($id)
    {
        $rendezvous = Rendezvous::findOrFail($id);
        $rendezvous->delete();

        return response()->json(null, 204); // Return an empty response with a 204 status code
    }
}
