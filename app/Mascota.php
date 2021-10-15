<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
     protected $table='mascotas';
    protected $primaryKey='id_mascota';

    //especificamos las relaciones 
    public $with=['especie'];

    // para definir tu llave primaria es o no un numero autoincrementable
    public $incrementing=true;
    //activar o desactivar el registro de etiquetas de tiempo
    public $timestamps=true;

    public $fillable=[
    'id_mascota',
    'nombre',
    'edad',
    'peso',
    'genero',
    'id_propietario',
    'id_especie',
    'id_razas'
    ];

public function especie()
    {
        return $this->belongsTo(Especie::class,'id_especie','id_especie');
    }

}
