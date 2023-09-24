import './checkout.css';
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../contexts/cartContext.js';

function Checkout() {
	const cart = useContext(cartContext);
	const [total, setTotal] = useState(0);
	const [premiumShipping, setPremiumShipping] = useState(false);

	useEffect(() => {
		let t = 0;
		cart.userCart.forEach(element => {
			t += element.price * element.q;
		});
		setTotal(t);
	}, [cart.userCart]);

	return (
		<div className='justify-content-center container-fluid d-flex'>
			<form className='w-50 px-5 pb-4 pt-4 rounded border shadow mt-5'>
				<h3 className='mb-3'>Checkout</h3>
				<div className='mb-3 row'>
					<div class="col-8">
						<label for="exampleInputEmail1" class="form-label">Nombre completo</label>
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
				</div>
				<div className='mb-3 row'>
					<div class="col-8">
						<label for="exampleInputEmail1" class="form-label">Código postal</label>
						<input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
				</div>
				<div className='mb-3 row'>
					<div class="col">
						<label for="exampleInputEmail1" class="form-label">Dirección</label>
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
				</div>
				<div className='mb-3 row'>
					<div class="col">
						<label for="exampleInputEmail1" class="form-label"># De Teléfono</label>
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
				</div>
				<div className='mb-3 row'>
					<div class="col">
						<label for="exampleInputEmail1" class="form-label">Dirección</label>
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
				</div>
				<div className='mb-3 row'>
					<div class="col">
						<label for="exampleInputEmail1" class="form-label"># De Tarjeta</label>
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
				</div>
				<div className='mb-3 row'>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" onChange={(e) => setPremiumShipping(e.target.checked)} id="flexCheckDefault" />
						<label class="form-check-label" for="flexCheckDefault">
							Envio premium (+ 5%)
						</label>
					</div>
				</div>
				<hr />
				<div className='mb-4 row'>
					<p className='h5 float-start col'>Total = </p>
					<p className='h5 text-end col'>$ {premiumShipping ? total + total/100*5 : total}</p>
				</div>
				<button type="submit" class="btn btn-primary float-end">Confirmar compra</button>
			</form>
		</div>
	);
}

export default Checkout;