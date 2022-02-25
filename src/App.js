import React, { useState } from "react";
import "./App.css";
import male from "./photos/male.png";
import female from "./photos/female.png";
import back from "./photos/back button.png";
function App() {
  const [gender, genderFunction] = useState("");
  const [disabled, disableFunction] = useState(true);
  const [MaleOutline, MaleOutlineFunction] = useState(
    "card text-center  male-card"
  );
  const [FeOutline, FeOutlineFunction] = useState(
    "card text-center female-card "
  );
  return (
    <React.Fragment>
      <img
        src={back}
        alt="back"
        className="back"
        height="28px"
        onClick={() => {
          console.log("pre page");
        }}
      />
      <h2 className="text-center  my-3">I am a ..</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div></div>
            <div
              className={MaleOutline}
              onClick={() => {
                genderFunction("Male");
                disableFunction(false);
                MaleOutlineFunction("card text-center  pink-shadow male-card");
                FeOutlineFunction("card text-center female-card ");
              }}
            >
              <div className="overflow">
                <img className="male" src={male} alt="Male" height="187px" />
              </div>
              {/* <div className="card-body text-dark ">Male</div> */}
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className={FeOutline}
              onClick={() => {
                genderFunction("Female");
                disableFunction(false);
                FeOutlineFunction("card text-center female-card pink-shadow");
                MaleOutlineFunction("card text-center male-card");
              }}
            >
              <div className="overflow  ">
                <img className="male" alt="Female" src={female} />
              </div>
              {/* <div className="'card-body text-dark">Female</div> */}
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <div className="App">
        <button
          className="btn btn-pink next"
          disabled={disabled}
          onClick={
            gender === "Female" || gender === "Male"
              ? () => {
                  console.log(gender);
                }
              : () => {
                  alert("did not choose");
                  console.log("Did not choose");
                }
          }
        >
          &emsp; &emsp;&emsp; Next &emsp; &emsp;&emsp;
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
