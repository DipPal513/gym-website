import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import '../../../Styles/Service.css'
const Service = ({ id,img, description, name, price }) => {
  return (
    <div className="col-lg-4 mb-3">
      <div className="card h-100 shadow">
        <img src={img} className="card-img-top h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <h5>Price: {price}</h5>
          <Button className="service-btn">
            <Link to = {`/servicedetail/${id}`}>Show Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
