import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../elements/card/Card';
import './home.css';
import { Link } from 'react-router-dom';
import Carousel from '../../elements/carousel/Carousel.js';

function Home() {
  let carrouselImgs = ["https://http2.mlstatic.com/D_NQ_625255-MLA71082476542_082023-OO.webp", "https://http2.mlstatic.com/D_NQ_777306-MLA71214262048_082023-OO.webp", "https://http2.mlstatic.com/D_NQ_669817-MLA71131508864_082023-OO.webp"];
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
      <Carousel className="px-5 mt-3" imgList={carrouselImgs} />
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
