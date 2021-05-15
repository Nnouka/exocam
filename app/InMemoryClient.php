<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InMemoryClient extends Model
{
    //
    public const token_id = "f2e3a132-748f-484e-afb4-a7faf65685b1";
    public const client_id = "90c92f10a77e49008c384929431aad13";

    public static function generate() {
        $t = json_encode([
            "cti" => InMemoryClient::client_id,
            "jti" => InMemoryClient::token_id
        ]);
    }

}
