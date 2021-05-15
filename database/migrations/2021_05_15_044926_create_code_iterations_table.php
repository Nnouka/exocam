<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCodeIterationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('code_iterations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('practice_block_id')->unsigned();
            $table->string('test_result_source_file');
            $table->timestamps();
            // foreign
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('practice_block_id')->references('id')->on('practice_blocks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('code_iterations');
    }
}
