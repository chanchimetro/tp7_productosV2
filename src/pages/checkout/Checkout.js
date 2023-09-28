import './checkout.css';
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../contexts/cartContext.js';
import { Link } from 'react-router-dom';

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

	const handleSubmit = (e) => {
		e.preventDefault();
		cart.setUserCart([]);
	}

	return (
		<>
			<div className='justify-content-center container-fluid d-flex'>
				<form className='w-50 px-5 pb-4 pt-4 rounded border shadow mt-5' onSubmit={(e) => handleSubmit(e)}>
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
						<p className='h5 text-end col'>$ {premiumShipping ? total + total / 100 * 5 : total}</p>
					</div>
					<button type="submit" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">Confirmar compra</button>
				</form>
			</div>

			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="exampleModalLabel">Listo!</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							Tus productos llegarán dentro de poco!
						</div>
						<div class="modal-footer">
							<Link to={"/main"}><button type="button" data-bs-dismiss="modal" class="btn btn-primary">OK</button></Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Checkout;