<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Razas extends Model
{
    //
     protected $table='razas';
    protected $primaryKey='id_razas';

    public $incrementing=true;
    public $timestamps=false;

    public $fillable=[
    	'id_razas',
    	'razas'
      ];
}
