import React from "react";
import "../css/company.css";

function Company() {
  const loop = 10;
  const arr = [
    {
      id: 1,
      name: "Uber",
      image: "https://www.fintechfutures.com/files/2016/10/uber.jpg",
    },
    {
      id: 2,
      name: "Activeloop",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "You",
      image:
        "data:image/png;base64,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",
    },
    {
      id: 4,
      name: "Replicate Ai",
      image:
        "data:image/png;base64,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",
    },
    {
      id: 5,
      name: "ZenML",
      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/a6sfm1gtzn7iype5oqqm",
    },
  ];
  return (
    <div className="company ">
      <h2>
        <b>Refer a Friend and Earn $s</b>
      </h2>
      <div className="company__container container-fluid">
        <h4>Can't find the company you're looking for?</h4>
        <input
          placeholder="Search for a company"
          className="form-control input"
        ></input>
        <div className="container-fluid ">
          <div className="row card-center">
            {arr.map((item) => (
              <div className="col-lg- card" key={item.id}>
                <img
                  className="company__image"
                  src={item.image}
                  alt="uber"
                ></img>
                <h4> {item.name}</h4>
              </div>
            ))}
            {arr.map((item) => (
              <div className="col-lg- card" key={item.id}>
                <img
                  className="company__image"
                  src={item.image}
                  alt="uber"
                ></img>
                <h4> {item.name}</h4>
              </div>
            ))}
            {arr.map((item) => (
              <div className="col-lg- card" key={item.id}>
                <img
                  className="company__image"
                  src={item.image}
                  alt="uber"
                ></img>
                <h4> {item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
