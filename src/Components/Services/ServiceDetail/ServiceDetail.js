import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleServiceDetail from "./SIngleServiceDetail/SingleServiceDetail";

const ServiceDetail = () => {
  const [data, setData] = useState();
  const { serviceId } = useParams();
  useEffect(() => {
    fetch("../../fakeData.json")
      .then((res) => res.json())
      .then((d) => {
        const exactData = d?.find(td => td.id == serviceId);
        setData(exactData)
      
      });
  }, [serviceId]);


    return (
    <div className="container text-center mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5">
          <SingleServiceDetail key = {Math.random()*2000000}{...data}/>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
