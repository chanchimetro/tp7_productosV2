import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../elements/card/Card';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    let r = Math.floor(Math.random() * 95); //ya se que hardcodear el maximo del numero random es malo pero creo que traer todos los items y agarrar 6 random es peor.
    axios.get(`https://dummyjson.com/products?limit=6&skip=${r}`)
      .then(function (response) {
        console.log(response);
        setProductList(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div id="carouselMain" class="carousel slide px-5 mt-3">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://http2.mlstatic.com/D_NQ_625255-MLA71082476542_082023-OO.webp" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://http2.mlstatic.com/D_NQ_808244-MLA70917953847_082023-OO.webp" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://http2.mlstatic.com/D_NQ_743633-MLA70916521521_082023-OO.webp" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className='container-fluid px-5 my-5'>
        <div className='row mb-3'>
          <div className='align-middle'>
            <span className='h4 fw-semibold'>
              Podria interesarte...     
            </span>
            <Link to='/main' className='text-decoration-none mx-3 fw-light'>Ver más</Link>
          </div>
        </div>
        <div className='row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-evenly'>
          {productList.map((prod) => (
            <Card item={prod}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
