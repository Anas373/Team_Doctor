<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
                    
                            // Désactiver temporairement les vérifications de clés étrangères
            DB::statement('SET FOREIGN_KEY_CHECKS=0;');

            // Truncate la table 'users'
            DB::table('users')->truncate();

            // Réactiver les vérifications de clés étrangères
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('users')->insert([
            [
                'name' => 'Dr.Mohmed Amine',
                'email' => 'mohamed.amine@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Dr. Hind Nadim',
                'email' => 'hind.nadim@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Dr. Aazaoui Fatima',
                'email' => 'aazaoui.fatima@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Dr. Hanane Rachid',
                'email' => 'hanane.rachid@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Dr. Halim Saidi',
                'email' => 'halim.saidi@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Dr. Fatima Ezahra Eljirrarie',
                'email' => 'fatima.eljirrarie@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Dr.Fadloulah Ahmed',
                'email' => 'fadloulah.ahmed@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Dr. El jazouli Intissar',
                'email' => 'el.jazouli@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],



            [
                'name' => 'Dr. Farid badri',
                'email' => 'Farid.badri@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],
            


            [
                'name' => 'Dr. Abdou mohamed said',
                'email' => 'Abdoumohamed.said@example.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],




            [
                'name' => 'Dr. Chachi Abderrazaq',
                'email' => 'Chachi.Abderrazaq.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],
            



            [
                'name' => 'Dr. Youness bouziani',
                'email' => 'Youness.bouziani.com',
                'role' => 'doctor',
                'password' => Hash::make('password'),
            ],

        ]);}
}
