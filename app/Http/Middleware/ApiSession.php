<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Session;

class ApiSession
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->startSession($request);
        return $next($request);
    }

    public function startSession($request) {
        Session::setId($request->header('X-SESSION'));
        Session::setRequestOnHandler($request);
        Session::start();
    }
}
