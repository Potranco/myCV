import { useState } from "react";
import "./style.css";

type props= {
    items: Array<any>
}

const Carousel = ({ items }:props) => {
  const [current, setCurrent] = useState(0);
  const length = items.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={prevSlide}>❮</button>
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${(current * 100)}%)` }}
        >
          {items.map((item, index) => (
            <div className="carousel-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-btn right" onClick={nextSlide}>❯</button>
    </div>

    <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
