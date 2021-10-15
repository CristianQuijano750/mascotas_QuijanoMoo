<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Propietarios extends Model
{
    //
     protected $table='Propietarios';
    protected $primaryKey='id_propietarios';

    public $incrementing=true;
    public $timestamps=false;

    public $fillable=[
    	'id_propietarios',
    	'propietarios'
    	];
}
