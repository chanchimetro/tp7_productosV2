import './card.css';

function Card({ item }) {
    return (
        <div className='col-md-2'>
            <div class="card h-100">
                <img src={item.thumbnail} className="card-img-top" alt="No Image Available" />
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.rating}/5 ⭐</p>
                </div>
                <div class="card-footer">
                    <a href="./listing.html?id=${item.id}" class="btn btn-primary">Ver producto</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
