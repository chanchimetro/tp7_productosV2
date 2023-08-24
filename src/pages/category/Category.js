import './category.css';
import axios from 'axios';
import Card from '../../elements/card/Card.js';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

function Category() {
    let param = useParams();
    const [productList, setProductList] = useState([]);
    const [limit, setLimit] = useState(30);
    const [itemSkip, setItemSkip] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${param.cat}?limit=${limit}&skip=${itemSkip}`)
            .then(function (response) {
                console.log(response);
                setProductList(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className='container-fluid p-5'>
            <Link to="/main" className='backButton row text-decoration-none'>
                <button className='btn mb-2 btn-secondary'>&#8249; Volver</button>
            </Link>
            <div className='h2 fw-semibold text-capitalize'>
                {param.cat}
            </div>
            <div className='fw-bold h5 mt-2'>
                Mostrando <span>{productList.length}</span> item(s) de {total} [<span>{itemSkip} - {itemSkip + productList.length}</span>]
                <div className="float-end" id="pagControls">
                    <button type="button" onClick={() => itemSkip - limit >= 0 ? setItemSkip(itemSkip - limit) : console.log("nop")} className="btn btn-link text-decoration-none">◄</button>
                    <button type="button" onClick={() => itemSkip + limit <= total ? setItemSkip(itemSkip + limit) : console.log("nop")} className="btn btn-link text-decoration-none">►</button>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-5 g-4 d-flex justify-content-center'>
                {productList.map((prod) => (
                    <Card item={prod}></Card>
                ))}
            </div>
        </div>
    );
}

export default Category;