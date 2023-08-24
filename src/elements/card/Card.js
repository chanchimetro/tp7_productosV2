import { Link } from 'react-router-dom';
import './card.css';

function Card({ item }) {
    return (
        <Link to={`/listing/${item.id}`} className='text-decoration-none'>
            <div className='col'>
                <div class="card">
                    <div className='h-75 d-flex justify-content-center'>
                        <img src={item.thumbnail} class="card-img-top img-fluid h-100 w-auto" alt={item.title} />
                    </div>
                    <div class="card-body">
                        <div class="card-title text-wrap h5">$ {item.price}</div>
                        <p class="card-text fw-light text-wrap">{item.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
