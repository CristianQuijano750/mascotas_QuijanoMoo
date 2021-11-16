var apiMascota='http://localhost/mascotas/public/apiMascota';

new Vue({
	
	http: {
            headers: {  //token para cargar los datos del master
                'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

	el:"#mascota",

	data:{
		prueba:'god base de datos',
		mascotas:[],

		nombre:'',
		genero:'',
		peso:'',
		agregando:true,
		id_mascota:'',



	},

	//se crea las funciones de la pagina
	created:function(){
		this.obtenerMascotas();
	},

		methods:{
			obtenerMascotas:function(){
				this.$http.get(apiMascota).then(function(json){
					//se declara los array para las mascotas o el diseño estetico comienzo
					this.mascotas=json.data;
					console.log(json.data);
				}).catch(function(json){
					console.log(json);
				});
			},

			mostrarModal:function(){
				this.agregando=true;
				this.nombre='';
				this.genero='';
				this.peso='';
				$('#modalMascota').modal('show');
			},

			guardarMascota:function(){
				// se forma el archvo j para su controlador y transmitir datos
				var mascota={nombre:this.nombre,genero:this.genero,peso:this.peso};

				// console.log(mascota); eliminar en caso de fallar

				
				this.$http.post(apiMascota,mascota).then(function(j){ //se enlazan los datos del controlador
					this.obtenerMascotas();
					this.nombre='';
					this.genero='';
					this.peso='';
				}).catch(function(j){
					console.log(j);
				});
				$('#modalMascota').modal('hide');
				console.log(mascota);
				// console.log(mascota); //eliminar en caso de fallar
			},

			eliminarMascota:function(id){
				var confir= confirm('Esta seguro de eliminar la mascota?');
				if (confir)
				{
					this.$http.delete(apiMascota + '/' + id).then(function(json){
						this.obtenerMascotas();
					}).catch(function(json){

					});
				}
			},

			editandoMascota:function(id){
				this.agregando=false;
				this.id_mascota=id;
				this.$http.get(apiMascota + '/' + id).then(function(json){
					//console.log(json.data); // omitir en caso de refrescar
					this.nombre=json.data.nombre;
					this.genero=json.data.genero;
					this.peso=json.data.peso;
				});
				$('#modalMascota').modal('show');
			},

			actualizarMascota:function(){
				var jsonMascota = {nombre:this.nombre,
									genero:this.genero,
									peso:this.peso};
				//console.log(jsonMascota); //omitir en caso de fallar
				this.$http.patch(apiMascota + '/' + this.id_mascota,jsonMascota).then(function(json){
					this.obtenerMascotas();
				});
				$('#modalMascota').modal('hide');
				//alert('estamos modificando'); // cambiar en caso de mdificar los datos
			}


		}
 
});