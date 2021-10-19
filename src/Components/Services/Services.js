import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = ({ quantity }) => {
  const [service, setService] = useState("");
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((result) => setService(result));
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="my-5 pt-5 text-uppercase">
          our <span className="text-danger">services</span>
        </h1>
        <div className="row">
          {service
            ? service
                .map((s) => <Service key={s.id} {...s} />)
                .slice(0, quantity)
            : ""}
        </div>
      </div>
    </>
  );
};

export default Services;
