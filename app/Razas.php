<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Razas extends Model
{
    //
     protected $table='razas';
    protected $primaryKey='id_razas';
     public $with=['mascotas'];
    public $incrementing=true;
    public $timestamps=false;

    public $fillable=[
    	'id_razas',
    	'razas'
      ];
public function mascotas(){
        return $this->hasMany(Mascota::class, 'id_razas','id_razas');
    }

     }
