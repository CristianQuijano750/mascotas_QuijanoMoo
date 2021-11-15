@extends('layout.master')
@section('contenido')
    <h1>
        CRUD PROPIETARIOS   
    </h1>
@endsection
@push('scripts')
    <script src="{{asset('js/apis/propietarios.js')}}"></script>
@endpush    