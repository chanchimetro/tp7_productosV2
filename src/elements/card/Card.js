import { Link } from 'react-router-dom';
import './card.css';
import { lookInCart } from '../../pages/listing/Listing';
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../contexts/cartContext';

function Card({ item }) {
	const [inCart, setInCart] = useState(false);
	const cart = useContext(cartContext);
	useEffect(() => {
		setInCart(lookInCart(item, cart));
	}, [cart.userCart]);

	return (
		<Link to={`/listing/${item.id}`} className='text-decoration-none'>
			<div className='col'>
				<div class="card">
					<div className='h-75 d-flex justify-content-center'>
						<img src={item.thumbnail} class="card-img-top img-fluid h-100 w-auto" alt={item.title} />
					</div>
					<div class="card-body">
						<div class="card-title text-wrap h5">$ {item.price}</div>
						<p class="card-text fw-light text-wrap">{inCart ? `${item.title} ✅` : item.title}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Card;
