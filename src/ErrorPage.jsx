import { Link } from "react-router-dom";

export default function ErrorPage () {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
          <h1>Oh no, this route doesn't exist!</h1>
          <Link to="/">
            You can go back to the home page by clicking here, though!
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

