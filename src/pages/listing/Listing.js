import './listing.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react';
import { cartContext } from '../../contexts/cartContext.js';

const addToCart = (item, cart, q) => {
    cart.setUserCart(
        [
            ...cart.userCart,
            {
                title: item.title,
                price: item.price,
                img: item.thumbnail,
                q: q
            }
        ]
    );
    console.log(cart.userCart);
}

function Listing() {
    const cart = useContext(cartContext);
    const params = useParams();
    const [q, setQ] = useState(1);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.itemId}`)
            .then(function (response) {
                setItem(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        loading ?
            <div class="spinner-border text-secondary text-center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            :
            <div className="container-fluid mt-3 p-5 pt-2">
                <Link to="/main" className='backButton row text-decoration-none'>
                    <button className='btn mb-2 btn-secondary'>&#8249; Volver</button>
                </Link>
                <span className='row mt-2'>
                    <div id="listingCarousel" className="carousel rounded border slide col-4">
                        <div className="carousel-inner">
                            {
                                item.images.map((img, i) => (
                                    i === 0 ?
                                        <div class="carousel-item active">
                                            <img src={img} className="d-block w-100" alt="..." />
                                        </div> :
                                        <div class="carousel-item">
                                            <img src={img} className="d-block w-100" alt="..." />
                                        </div>
                                ))
                            }
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#listingCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#listingCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <span className="mx-3 col-4">
                        <p className="text-muted p-0 text-capitalize">{item.category}</p>
                        <hr />
                        <p className="h3 fw-bold" id="productTitle">{item.title}</p>
                        <p id="productRating">{item.rating}/5 ⭐</p>
                        <p id="productDesc">{item.description}</p>
                        <p className="fw-bold h3 mt-2" id="productPrice">$ {item.price}</p>
                        <div class="btn-group btn-group-sm mt-2" role="group" aria-label="Small button group">
                            <button type="button" class="btn btn-outline-secondary" onClick={() => {if (q > 1)  setQ(q - 1)}}>-</button>
                            <span class="btn btn-outline-secondary">{q}</span>
                            <button type="button" class="btn btn-outline-secondary" onClick={() => setQ(q + 1)}>+</button>
                        </div>
                        <br/>
                        <button className='btn btn-primary mt-3' onClick={() => addToCart(item, cart, q)}>Agregar al carrito</button>
                    </span>
                </span>
            </div>
    );
}

export default Listing;
