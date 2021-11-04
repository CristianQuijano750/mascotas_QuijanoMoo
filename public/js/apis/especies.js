
function init() {

var apiEspecie='http://localhost/mascotas/public/apiEspecie'


new Vue ({
	el:'#apiEspecies',

	data:{
        mensaje:'Hola bienvenido',
        especies:[],
	},

//se ejecuta al iniciar de forma automatica
	created:function(){
		this.getEspecies();

	},

	// inicio methods
	methods:{
		getEspecies:function(){
			this.$http.get(apiEspecie).then(function(j){
				this.especies=j.data;
			})


 //this.$http.metodo(rutaApi).then(function(json){
 //})   //no copiar es termino nada mas

		}	

	},

	computed:{

	},
})	

}window.onload = init;