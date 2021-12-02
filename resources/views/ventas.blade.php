@extends('layouts.master')
@section('titulo','Interface de ventas')
@section('contenido')
	
<div id="apiVenta"> 
		<div class="container"> <!-- inicio de container -->
			<div class="row"> <!-- inicio de row -->
				<div class="col-md-4"> <!-- inicio de col -->

					<div class="input-group mb-3">
  						<input type="text" class="form-control" placeholder="Escriba el codigo del producto" aria-describedby="basic-addon2" v-model="sku" v-on:keyup.enter="buscarProducto()">
  					<div class="input-group-append">
  						<button class="btn btn-outline-secondary" type="button" @click="buscarProducto()">Búscar</button>
  					</div>
				</div>

			</div> <!-- fin del col -->
			
		</div> <!-- fin de row -->
	

		<div class="card">
		<!-- inicio de row -->
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">

						<table class="table table-bordered">
							<thead>
								<th style="background: #ffff66">SKU</th>
								<th style="background: #ffff66">PRODUCTO</th>
								<th style="background: #ffff66">OPERACIONES</th>
								<th style="background: #ffff66">PRECIO</th>
								<th style="background: #ffff66">CANTIDAD</th>
								<th style="background: #ffff66">TOTAL</th>
							</thead>

							<tbody>
								<tr v-for="(venta,index) in ventas">
									<td>@{{venta.sku}}</td>
									<td>@{{venta.nombre}}</td>
									<td>
										<button class="btn btn-default btn-xs" @click="eliminarProducto(index)">
											<i class="fas fa-trash"></i>
										</button>
									</td>
									<td>@{{venta.precio}}</td>
									<td><input type="number" v-model.number="cantidades[index]" min="1"></td>
									<td>@{{totalProducto(index)}}</td>
								</tr>
							</tbody>

						</table>
						
					</div>
				</div>
				<!-- fin del row -->
			</div>
			<!-- fin del card body -->
		</div>
		<!-- fin de card -->
		@{{ventas}}

		<div class="row">
			<div class="col-md-8"></div>
				<div class="col-md-4">
					<div class="card">
						<div class="card-body">
							
								<table class="table table-bordered table-condensed">
									<tr>
										<th style="background: #ffff66">Subtotal</th>
										<td>$ @{{subTotal}}</td>

									</tr>
									
									<tr>
										<th style="background: #ffff66">IVA</th>
										<td>$ @{{iva}}</td>

									</tr>
									<tr>
										<th style="background: #ffff66">TOTAL</th>
										<td><b>$ @{{granTotal}}</b></td>
									</tr>
									<tr>
										<th style="background: #ffff66">Articulos: </th>
										<th>@{{noArticulos}}</th>

									</tr>

								</table>
								
						</div>
						<!-- fin de card-body -->

					</div>
					  <!-- fin de card -->
				</div>
					<!-- fin de col md 4 -->

		</div>
		<!-- fin de row -->




	</div> <!-- fin de container -->
</div> <!-- fin de vue -->
	
@endsection


@push('scripts')

	<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/apis/apiVenta.js')}}"></script>

@endpush

<!-- <input type="hidden" name="route" value="{{url('/')}}"> -->