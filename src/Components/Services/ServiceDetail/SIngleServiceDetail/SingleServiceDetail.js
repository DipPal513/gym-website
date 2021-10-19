import React from "react";

const SingleServiceDetail = ({ img, description, price, id, name }) => {
  return (
    <>
      <div class="card my-5 " style={{width: '100%'}}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
           {description}
          </p>
          <h5>price: {price}</h5>
          <a href="#" class="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleServiceDetail;
