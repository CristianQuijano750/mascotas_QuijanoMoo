
function init() {

var apiEspecie='http://localhost/mascotas/public/apiEspecie'


new Vue ({

 //se asigna el token
    http: {
            headers: {
                'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

	el:'#apiEspecies',

	data:{
        mensaje:'Hola bienvenido',
        especies:[],
	},

//se ejecuta al iniciar de forma automatica
	created:function(){
		this.getEspecies();

	},

	// inicio methods del listado de todas las especies
	methods:{
		getEspecies:function(){
			this.$http.get(apiEspecie).then(function(j){ 
				this.especies=j.data;
			})


 //this.$http.metodo(rutaApi).then(function(json){
 //})   //no copiar es termino nada mas

		},


		eliminarEspecie:function(id){
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
        //eliminamos la especie de la base de daatos seleccionado
        
       this.$http.delete(apiEspecie + '/' + id).then(function(j){
              this.getEspecies();
       }).catch(function(j){
             console.log(j);
       });


      Swal.fire(
        'Eliminado Exitosamente!',
        'el propietario fue eliminado.',
        'success'
        )
      }
  });
       

		}, //fin del metodo eliminar


		mostrarModal(){
			$('#modalEspecies').modal('show');
		}



	},

	computed:{

	},
})	

}window.onload = init;