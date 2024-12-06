<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RendezvousController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');


// ajout de  register 
Route::post('/register', [RegisterController::class, 'register']);




// les api de doctors 
Route::prefix('doctors')->group(function () {
    Route::get('/', [DoctorController::class, 'index']); // Liste tous les docteurs
    Route::post('/', [DoctorController::class, 'store']); // Crée un nouveau docteur
    Route::get('{id}', [DoctorController::class, 'show']); // Récupère un docteur par ID
    Route::put('{id}', [DoctorController::class, 'update']); // Met à jour un docteur
    Route::delete('{id}', [DoctorController::class, 'destroy']); // Supprime un docteur
});




//les api de patient 


// Route::prefix('patients')->group(function () {
//     Route::get('/', [PatientController::class, 'index']); // Liste tous les patients
//     Route::post('/', [PatientController::class, 'store']); // Crée un nouveau patient
//     Route::get('{id}', [PatientController::class, 'show']); // Récupère un patient par ID
//     Route::put('{id}', [PatientController::class, 'update']); // Met à jour un patient
//     Route::delete('{id}', [PatientController::class, 'destroy']); // Supprime un patient
// });


Route::get('patients', [PatientController::class, 'index']);
Route::post('patients', [PatientController::class, 'store']);
Route::get('patients/{patient}', [PatientController::class, 'show']);
Route::put('patients/{patient}', [PatientController::class, 'update']);
Route::delete('patients/{patient}', [PatientController::class, 'destroy']);









Route::get('/rendezvous', [RendezvousController::class, 'index']);
Route::post('/rendezvous', [RendezvousController::class, 'store']);
Route::put('/rendezvous/{id}', [RendezvousController::class, 'update']);
Route::delete('/rendezvous/{id}', [RendezvousController::class, 'destroy']);
