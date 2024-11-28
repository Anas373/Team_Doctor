<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id(); // Auto-increment ID
            $table->unsignedBigInteger('user_id')->unique(); // Foreign key to the users table
            $table->string('specialization'); // Doctor's specialization
            $table->integer('experience'); // Years of experience
            $table->string('image'); // Path to the doctor's image
            $table->timestamps(); // Created_at and updated_at

            // Define the foreign key relationship
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctors');
    }
}
