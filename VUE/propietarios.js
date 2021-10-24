new Vue({
   //Especifica la zona del array
  el:"#miPagina",

  // Este apartado es para asignar el vue
  // Y constantes.
  data:{
   nombre:'',
   primer_apellido:'',
   Segundo_apellido:'',
   generos:'',
   editando:0,
    indice:0,
   buscar:'',
   

   propietarios:[{nombre:'Luis',primer_apellido:'Perez',segundo_apellido:'Ojeda',genero:'M'},
                 {nombre:'Jorge',primer_apellido:'Gonzales',segundo_apellido:'Perez',genero:'M'},
                 {nombre:'Leticia',primer_apellido:'Cruz',segundo_apellido:'May',genero:'F'}
            ],



   genero:[
               {clave:1,nombre:'M'},
               {clave:2,nombre:'F'}
            ],



  },

  // Esta seccion nos sirve para los metodos
  methods:{

   agregarPropietario:function(){
    if(this.nombre && this.primer_apellido && this.segundo_apellido && this.genero){
      // se menciona los propietarios para obtener los array
      var elPropietario={nombre:this.nombre,primer_apellido:this.primer_apellido,segundo_apellido:this.segundo_apellido,genero:this.generos};

      // Agregar el propietario del tipo objeto
      this.propietarios.push(elPropietario);
      this.limpiarHtml();

      //enviamos el html/ del nombre de la propietarios, se inserta la interfaz
      this.$refs.nombre.focus();

      //mensaje de confirmacion 
      Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Se ha guardado exitosamente',
         showConfirmButton: false,
         timer: 2000
       })
   }
   else
     Swal.fire({
         position: 'top-end',
         icon: 'error',
         title: 'Debe capturar todos los datos',
         showConfirmButton: false,
         timer: 2000
       })
   },

   limpiarHtml:function(){
     this.nombre='';
     this.primer_apellido='';
     this.segundo_apellido='';
     this.generos='';
   },

   eliminarPropietario:function(pos){
    Swal.fire({
      title: 'Esta seguro de eliminar?',
      text: "No podra recuperarse los cambios!",
      icon: 'warning',
      showCancelButton: true,
    confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimina!'
    }).then((result) => {
      if (result.isConfirmed) {
        //eliminamos al propietario seleccionado
        this.propietarios.splice(pos,1);

      Swal.fire(
        'Eliminado Exitosamente!',
        'el propietario fue eliminado.',
        'success'
        )
      }
  })
    //fin de ventana de sweet alert
    },


   editarPropietario:function(pos){
      this.nombre=this.propietarios[pos].nombre;
      this.primer_apellido=this.propietarios[pos].primer_apellido;
      this.segundo_apellido=this.propietarios[pos].segundo_apellido;
      this.generos=this.propietarios[pos].genero;
      this.editando=1;
      this.indice=pos;
   },
   
   cancelar:function(){
      this.limpiarHtml();
      this.editando=0;
   },
   //se modifica el array para guardar  
   guardarEdicion:function(){
      this.propietarios[this.indice].nombre=this.nombre;
      this.propietarios[this.indice].primer_apellido=this.primer_apellido;
      this.propietarios[this.indice].segundo_apellido=this.segundo_apellido;
      this.propietarios[this.indice].genero=this.generos;

   //limpiamos el html del registro de agregar referenciando al boton azul
      this.limpiarHtml();
      this.editando=0;
   

      Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'Los cambios fuero exitosos',
      showConfirmButton: false,
      timer: 2000
    })
    },

 

  },
  // FIN DE METHODS
  //para cambiar y calcular los valores
  computed:{
    numeroPropietarios: function(){
      var num=0;
      num=this.propietarios.length;
      return num;
    },
    filtroPropietarios:function(){
      return this.propietarios.filter((propietario)=>{
        return propietario.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
        propietario.primer_apellido.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
        propietario.segundo_apellido.toLowerCase().match(this.buscar.toLowerCase().trim()) ||
        propietario.genero.toLowerCase().match(this.buscar.toLowerCase().trim())

         });
     }
  }
//finaliza 
});