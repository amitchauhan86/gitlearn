import Header from "./Header";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetApi } from "./API/GetApi";

const MainPanel = () => {
  let data = GetApi();
  let navigate =useNavigate()


  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      navigate("/main");
    } else {
      navigate("/");
    }
  },[navigate])
  return (
    <div className="main-panel">
      <Header />
      <div className="inner-panel">
        <div className="row">
          {data &&
            data.dataa.map((item, index) => {
              return (
                <div className="col mb-4" key={index}>
                  <div className="card" style={{ width: "18rem" ,height: "auto"}}>
                    <img className="card-img-top"  src={item?.image} alt={item?.title}  />
                    <div className="card-body">
                      <h5 className="card-title">{item?.title}</h5>
                      <p className="card-text">
                      {item?.category}
                      </p>
                      <p className="btn-primary price">
                        Rs. {item?.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
