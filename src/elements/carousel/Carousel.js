import './carousel.css';

function Carousel({ imgList }) {
    return (
        <div id="carouselMain" class="carousel slide">
            <div class="carousel-inner">
                {
                    imgList.map((img, i) => (
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
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;