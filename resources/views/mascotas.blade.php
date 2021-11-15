@extends('layouts.master')
@section('titulo','CRUD MASCOTAS')
@section('contenido')
	<h1>HOLA BIENVENIDO</h1>
@endsection

@push('scripts')
<script src="{{asset('js/apis/mascotas.js')}}"></script>
@endpush