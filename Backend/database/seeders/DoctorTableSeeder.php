<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DoctorTableSeeder extends Seeder
{
    public function run()
    {
         DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        
        // Vider la table 'doctors'
        DB::table('doctors')->truncate();

        // Réactiver les vérifications de clés étrangères
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // Récupérer les utilisateurs ayant le rôle 'doctor'
        $users = DB::table('users')->where('role', 'doctor')->get();

        $doctorsData = [
            [
                'specialization' => 'Cardiologue',
                'experience' => 20,
                'image' => 'path/to/doc1.jpg',
            ],
            [
                'specialization' => 'Dentiste',
                'experience' => 15,
                'image' => 'path/to/doc2.jpg',
            ],
            [
                'specialization' => 'Ophtalmologue',
                'experience' => 18,
                'image' => 'path/to/doc3.jpg',
            ],
            [
                'specialization' => 'Pneumologue',
                'experience' => 12,
                'image' => 'path/to/doc4.jpg',
            ],
            [
                'specialization' => 'Orthopédiste',
                'experience' => 22,
                'image' => 'path/to/doc5.jpg',
            ],
            [
                'specialization' => 'Dentiste',
                'experience' => 10,
                'image' => 'path/to/doc6.jpg',
            ],
            [
                'specialization' => 'Orthopédiste',
                'experience' => 25,
                'image' => 'path/to/doc7.jpg',
            ],
            [
                'specialization' => 'Ophtalmologue',
                'experience' => 14,
                'image' => 'path/to/doc8.jpg',
            ],
            [
                'specialization' => 'Pneumologue',
                'experience' => 10,
                'image' => 'path/to/doc10.jpg',
            ],
            [
                'specialization' => 'Pneumologue',
                'experience' => 15,
                'image' => 'path/to/doc11.jpg',
            ],
            [
                'specialization' => 'Cardiologue',
                'experience' => 12,
                'image' => 'path/to/doc12.jpg',
            ],
            [
                'specialization' => 'Ophtalmologue',
                'experience' => 17,
                'image' => 'path/to/doc13.jpg',
            ],
        ];

        // Ensure the loop stops if there are more users than doctor data
        foreach ($users as $index => $user) {
            if (isset($doctorsData[$index])) {
                DB::table('doctors')->insert([
                    'user_id' => $user->id,
                    'specialization' => $doctorsData[$index]['specialization'],
                    'experience' => $doctorsData[$index]['experience'],
                    'image' => $doctorsData[$index]['image'],
                ]);
            } else {
                break; 
            }
        }

        
    }
}
