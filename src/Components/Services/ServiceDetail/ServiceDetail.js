import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleServiceDetail from "./SIngleServiceDetail/SingleServiceDetail";

const ServiceDetail = () => {
  const [data, setData] = useState();
  const { serviceId } = useParams();
  useEffect(() => {
    fetch("../../fakeData.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
    return (
    <div className="container text-center mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5">
          {data
            ? data.map((service) =>
                serviceId == service.id ? (
                  <SingleServiceDetail key={service.id} {...service} />
                ) : (
                  ""
                )
              )
            : ""}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
