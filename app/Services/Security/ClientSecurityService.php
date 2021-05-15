<?php


namespace App\Services\Security;

use App\DTOs\ClientTokenClaims;
use App\Exceptions\ApiException;
use App\Http\HttpStatus;
use App\InMemoryClient;

class ClientSecurityService
{
    private static $instance;
    /**
     * ClientSecurityService constructor.
     */
    private function __construct()
    {
    }

    /**
     * @return mixed
     */
    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new ClientSecurityService();
        }
        return self::$instance;
    }



    /**
     * @param $t
     * @throws ApiException
     */
    public function validateClientToken($t) {
        $info = $this->interpretClientToken($t);
        if (array_key_exists("jti", $info) &&
            array_key_exists("cti", $info)) {
            if ($info["cti"] !== InMemoryClient::client_id || $info["jti"] !== InMemoryClient::token_id) {
                throw new ApiException("Invalid token", HttpStatus::HTTP_UNAUTHORIZED);
            }
        } else {
            throw new ApiException("Invalid token", HttpStatus::HTTP_UNAUTHORIZED);
        }
    }

    public function interpretClientToken($t) {
        $d = base64_decode($t);
        if ($d !== "") {
            return json_decode($d, true);
        }
        return ["api" => null, "jti" => null];
    }
}
