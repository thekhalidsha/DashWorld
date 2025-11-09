import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";

function HeroSection(props) {
  return (
    <Container fluid className="my-4">
      <div className="hero-wrapper d-flex flex-wrap flex-md-nowrap gap-3">
        <div
          className="border border-dark rounded-3 overflow-hidden flex-grow-1"
          style={{ height: "50vh", minWidth: "0" }}
        >
          <Slider countries={props.countries} />
        </div>

        <div
          className="border border-dark rounded-3 d-flex align-items-center justify-content-center sidebanner"
          style={{
            height: "50vh",
            minWidth: "28%", 
            background:
              "url('https://placehold.co/800x600?text=Side+Banner') center/cover no-repeat",
          }}
        >
          
        </div>
      </div>

      <style>
        {`
          @media (min-width: 768px) {
            .hero-wrapper {
              display: flex;
              flex-wrap: nowrap !important;
            }
          }

          @media (max-width: 767.98px) {
            .hero-wrapper {
              flex-direction: column-reverse !important;
            }
            .sidebanner {
              width: 100% !important;
              height: 40vh !important;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default HeroSection;
