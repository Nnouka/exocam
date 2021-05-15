@extends('layouts.ui')
@section('content')
    <div class="animate__animated animate__flipInX" style="width:50%; margin: 0 auto; overflow: hidden; height: 80vh; display: flex; flex-direction: column; justify-content: center;">
        <div class="animate__animated animate__heartBeat animate__infinite" style="width: 100%; text-align: center; overflow: hidden;">
            <img src="{{asset('images/logo.svg')}}" width="50px" />
        </div>
        <h1 style="text-align: center; color: #cce">{{config('app.name', 'Exocam')}}</h1>
    </div>
@endsection
