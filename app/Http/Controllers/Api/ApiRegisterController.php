<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Auth\RegisterController;

class ApiRegisterController extends Controller
{
    public $registerController;

    /**
     * ApiRegisterController constructor
     */
    function __construct() {
        $this->registerController = new RegisterController();
    }

    /**
     * Calls the register method of the inbuilt laravel register function
     * 
     * @param $request
     * 
     */
    public function register(Request $request) {
        return $this->registerController->register($request);
    }
}
