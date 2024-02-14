import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";

function Input() {
  let { name, pass, edit } = useSelector((item) => {
    return item.TextReducer;
  });

  function submitHandler() {
    let obj = {
      id: Math.trunc(Math.random() * 1000),
      username: name,
      pass: pass,
    };
    if (name && pass) {
      dispatch({ type: "SUBMIT", payload: obj });
    }
  }
  let dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid  p-5 b-black" style={{ width: "40%" }}>
        <div className="row m-2">
          <label className="col">Name : </label>
          <input
            className="col"
            type="text"
            value={name}
            placeholder="Enter your name..."
            onChange={(e) =>
              dispatch({ type: "NAME", payload: e.target.value })
            }
          />
          <br />
          <br />
        </div>
        <div className="row m-2">
          <label className="col">Password :</label>
          <input
            className="col"
            type="password"
            placeholder="Enter your password..."
            value={pass}
            onChange={(e) => {
              dispatch({ type: "PASS", payload: e.target.value });
            }}
          />
        </div>
        <div className="row">
          <button
            className="col btn btn-primary"
            onClick={() => {
              submitHandler();
            }}
          >
            {edit?"EDIT":"SUBMIT"}
          </button>
        </div>
      </div>
      <Card />
    </>
  );
}

export default Input;
