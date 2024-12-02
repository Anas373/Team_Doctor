<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RendezvousController;
use App\Http\Controllers\RegisterController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');


// ajout de  register 
Route::post('/register', [RegisterController::class, 'register']);


Route::get('/rendezvous', [RendezvousController::class, 'index']);
Route::post('/rendezvous', [RendezvousController::class, 'store']);
Route::put('/rendezvous/{id}', [RendezvousController::class, 'update']);
Route::delete('/rendezvous/{id}', [RendezvousController::class, 'destroy']);
