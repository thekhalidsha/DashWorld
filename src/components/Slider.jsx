import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({countries}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const images = [
    "https://placehold.co/1200x600?text=First+Slide",
    "https://placehold.co/1200x600?text=Second+Slide",
    "https://placehold.co/1200x600?text=Third+Slide",
  ];

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators
        controls
        className="custom-carousel h-100"
      >
        {countries?.map((country, i) => (
          <Carousel.Item key={country.name + i}>
            <img
              className="d-block w-100"
              src={country.flag}
              alt={`Slide ${i + 1}`}
              style={{
                height: "50vh",
                objectFit: "cover",
              }}
            />
            <Carousel.Caption>
              <h3>{country.name}</h3>
              <p>{country.region}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <style>
        {`
          .custom-carousel .carousel-indicators {
            bottom: 15px;
            justify-content: center;
          }

          .custom-carousel .carousel-indicators [data-bs-target] {
            background-color: gray;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            opacity: 1;
          }

          .custom-carousel .carousel-indicators .active {
            background-color: black;
          }

          .custom-carousel .carousel-control-prev-icon,
          .custom-carousel .carousel-control-next-icon {
            filter: invert(1);
          }

          .custom-carousel .carousel-control-prev,
          .custom-carousel .carousel-control-next {
            bottom: 40px;
            top: auto;
          }
        `}
      </style>
    </>
  );
}

export default Slider;
