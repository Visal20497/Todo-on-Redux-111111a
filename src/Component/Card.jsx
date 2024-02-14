import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function Card() {
  console.log('hello')
  const { todo } = useSelector((state) => state.TextReducer);
  const dispatch = useDispatch();

  const delHandler = useCallback(
    (id) => {
      dispatch({ type: "DEL", payload: { id } });
    },
    [dispatch]
  );

  const editHandler = useCallback(
    (id) => {
      dispatch({ type: "EDIT", payload: { id } });
    },
    [dispatch]
  );

  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {todo.length === 0 && <h1>Please insert your data....</h1>}

      {todo.length > 0 &&
        todo.map(({ id, username, pass }) => (
          <div className="col-md-3 mb-4" key={id}>
            <div className="card">
              <div className="card-body">
                <div className="card-header">id: {id}</div>
                <div className="card-title"> USERNAME: {username}</div>
                <div className="card-text">PASSWORD: {pass}</div>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => delHandler(id)}
                >
                  Remove Data
                </button>
                <button className="btn btn-primary" onClick={() => editHandler(id)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default React.memo(Card);
