<?php

namespace App\Http\Middleware;

use App\Services\Security\ClientSecurityService;
use Closure;

class ClientAuthMiddleware
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
        $apiAuth = $request->header("x-api-token");
        if ($apiAuth == null) {
            $apiAuth = $request->header("X-API-TOKEN");
        }
        $security = ClientSecurityService::getInstance();
        $security->validateClientToken($apiAuth);
        return $next($request);
    }
}
