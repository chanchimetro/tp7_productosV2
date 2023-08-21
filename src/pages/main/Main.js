import './main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../elements/card/Card';


function Main() {
  const [productList, setProductList] = useState([]);
  const [limit, setLimit] = useState(30);
  const [itemSkip, setItemSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("")

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/search?limit=${limit}&skip=${itemSkip}&q=${query}`)
      .then(function (response) {
        console.log(response);
        setProductList(response.data.products);
        setTotal(response.data.total);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [itemSkip, query]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/categories`)
      .then(function (response) {
        console.log(response);
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className='container-fluid p-5'>
      <div className='row align-items-center justify-content-center'>
        <input className="form-control form-control-lg col" type="text" onKeyUp={(e) => setQuery(e.target.value)} placeholder="🔍︎ Buscar" aria-label=".form-control-lg example"></input>
        <div className="dropdown col">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {category === "" ? "Elije una categoría" : category}
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={() => setCategory("")}>Elije una categoría</a></li>
            {categories.map((cat) => (
              <li><a className="dropdown-item" onClick={() => setCategory(cat)}>{cat}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className='fw-bold h5 mt-5'>
        Mostrando <span>{productList.length}</span> item(s) de {total} [<span>{itemSkip} - {itemSkip + productList.length}</span>]
        <div className="float-end" id="pagControls">
          <button type="button" onClick={() => itemSkip - limit >= 0 ? setItemSkip(itemSkip - limit) : console.log("nop")} className="btn btn-link text-decoration-none">◄</button>
          <button type="button" onClick={() => itemSkip + limit <= total ? setItemSkip(itemSkip + limit) : console.log("nop")} className="btn btn-link text-decoration-none">►</button>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center'>
        {productList.map((prod) => (
          <Card item={prod}></Card>
        ))}
      </div>
    </div>
  );
}

export default Main;