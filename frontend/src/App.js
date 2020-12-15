import React from "react";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Amazon Clone
          </a>
        </div>
        <div>
          <a href="/card">Cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => {
            const {
              _id,
              name,
              category,
              image,
              price,
              brand,
              rating,
              numReviews,
              description,
            } = product;
            return (
              <div key={_id} className="card">
                <a href={`/product/${_id}`}>
                  {/* <!-- image size: 680px by  830px --> */}
                  <img className="medium" src={image} alt="" />
                </a>
                <div className="card-body">
                  <a href={`/product/${_id}`}>
                    <h2>{name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <div className="price">{price}€</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
