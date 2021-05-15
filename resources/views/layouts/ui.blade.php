<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title', 'Exocam')</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
        <!-- Styles -->
        <link href="{{asset('css/animate.min.css')}}" rel="stylesheet">
    </head>
    <body>
        <div id="root">
            @yield('content')
        </div>
        
    </body>
</html>
