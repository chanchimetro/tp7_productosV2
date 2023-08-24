import './listing.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

function Listing() {
    const params = useParams();
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
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            :
            <div className="container-fluid mt-3 p-5 pt-2">
                <Link to="/main" className='backButton row text-decoration-none'>
                    <button className='btn mb-2 btn-secondary'>&#8249; Volver</button>
                </Link>
                <span className='row'>
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
                    <span className="mx-3 col-3">
                        <p className="text-muted p-0 text-capitalize">{item.category}</p>
                        <hr />
                        <p className="h3 fw-bold" id="productTitle">{item.title}</p>
                        <p id="productRating">{item.rating}/5 ⭐</p>
                        <p id="productDesc">{item.description}</p>
                        <p className="fw-bold h3" id="productPrice">$ {item.price}</p>
                        <button className='btn btn-primary mt-5'>Comprar</button>
                    </span>
                </span>
                </div>
    );
}

export default Listing;
