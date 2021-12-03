function init(){
var apiProducto='http://localhost/mascotas/public/apiProducto';
new Vue({
	//asignamos el token
	http: {
            headers: {
                'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

	el:'#apiVenta',

	data:{
		mensaje:'HOLA BIENVENIDO XD',
		sku:'',
		ventas:[],
		cantidades:[],
		cant:1,
		auxSubTotal:0,
		

	},

	//permite la funcion por defecto es decir desde el inicio 
	created:function(){
		
	},

	//inicio de methods
	methods:{
		buscarProducto:function(){

			if(this.sku) {
			var producto = {}
			this.$http.get(apiProducto + '/' + this.sku).then(function(j){
				producto = {
					sku:j.data.sku,
					nombre:j.data.nombre,
					precio:j.data.precio,
					cantidad:1,
					total:j.data.precio
				};
			
					this.ventas.push(producto);
					this.cantidades.push(1);
				this.sku='';
			});
		}

		},

		eliminarProducto:function(id){
			this.ventas.splice(id,1);
		}
		

	},
	//fin de methods

	computed:{
		totalProducto(){  
			return(id)=>{
				var total = 0;
				total=this.ventas[id].precio * this.cantidades[id];
				//se visualiza la cotizacion del producto
				this.ventas[id].total=total; //actualizamos campos
				this.ventas[id].cantidad=this.cantidades[id];
				return total.toFixed(1);
			}

		},
		//finde total producto

		subTotal(){
			var total=0;
			var valor=0;

			for (var i =  this.ventas.length - 1; i >= 0; i--) {
				 total=total+this.ventas[i].total;
			}
			//subtotal de el apartado del subaux
			this.auxSubTotal=total.toFixed(1);
			return total.toFixed(1);
		},

		iva(){
			var auxIva=0;
			auxIva=this.auxSubTotal*0.16;

			return auxIva.toFixed(1);
		},

		numTotal(){
			var auxTotal=0;
			auxTotal=this.auxSubTotal*1.16;
			return auxTotal.toFixed(1);
		},

		numeroArticulos(){
			var acum=0;
			for (var i = this.ventas.length - 1; i >= 0; i--) {
				acum=acum+this.ventas[i].cantidad;
			}
			return acum;
		}


	}
	// fin de computed
})

} window.onload = init;