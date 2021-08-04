import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import React from "react";
import { Redirect } from "react-router-dom";
import { getAllShirts } from "../redux/actions/wear";

const Shirts = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const getShirts = useSelector((state) => state.getAllShirts);
  const dispatch = useDispatch();

  const fetchAllShirts = (page = 1) => {
    dispatch(getAllShirts(page));
  };

  React.useEffect(() => {
    fetchAllShirts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (getShirts.loading) {
    return <div>loading . . .</div>;
  }

  if (getShirts.error !== "") {
    return <p>{getShirts.error}</p>;
  }

  return (
    <div>
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      {console.log("getShirts", getShirts)}
      {getShirts.data.map((element) => {
        return (
          <div key={element.id}>
            <div>{element.name}</div>
            <Link to={`/shirts/${element.id}`}>View Detail</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Shirts;
