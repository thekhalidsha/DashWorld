import "bootstrap/dist/css/bootstrap.min.css";

function WelcomeDivider() {
  return (
    <div className="welcome-container my-4">
      <div className="welcome-inner">
        <span className="line left-line"></span>

        <h2 className="welcome-text text-center fw-bold mx-3">Welcome</h2>

        <span className="line right-line"></span>
      </div>

      <style>
        {`
          .welcome-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }

          .welcome-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1200px;
            position: relative;
          }

          .welcome-text {
            font-size: 2rem;
            color: #000;
            white-space: nowrap;
            position: relative;
            z-index: 1;
          }

          .line {
            flex-grow: 1;
            height: 2px;
            background-color: #000;
            position: relative;
          }

          .left-line {
            top: -6px;
            margin-right: 15px;
          }

          .right-line {
            bottom: -6px;
            margin-left: 15px;
          }

          @media (max-width: 767.98px) {
            .welcome-inner {
              flex-direction: column;
              align-items: center;
            }

            .left-line,
            .right-line {
              width: 100%;
              flex-grow: 0;
              top: auto;
              bottom: auto;
              margin: 6px 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default WelcomeDivider;
