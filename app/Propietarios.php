<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Propietarios extends Model
{
    //
     protected $table='Propietarios';
    protected $primaryKey='id_propietarios';
      
      public $with=['mascotas'];
    public $incrementing=true;
    public $timestamps=false;

    public $fillable=[
    	'id_propietarios',
    	'propietarios',
        'nombre',
        'apellidos',
        'genero',
        'celular',
        'calle',
        'colonia'
    	];

    	
    public function mascotas(){
        return $this->hasMany(Mascota::class, 'id_propietario','id_propietario');
    }

}
