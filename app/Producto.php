<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    
    //esto se creo con cmd en la carpeta del proyectousando
	//php artisan make:model Producto
    //definimos tabla de la base de datos
    protected $table='productos';

    //llave primaria
    protected $primaryKey='sku';

    //si la llave es un numero o string,es falso porque es cadena de caracteres(no es numerico, si lo fuera seria true)
    public $incrementing=false;


//este es falso porque no pusimos valores de tiempo

    public $timestamps=false;


//array
    protected $fillable=[
    	'sku',
    	'nombre',
    	'precio_venta',
    	'cantidad'
    ];
}
