import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Redirect } from "react-router-dom";
import { getMyFavourites } from "../redux/actions/wear";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const getFavourites = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  const fetchMyFavourites = (page = 1) => {
    dispatch(getMyFavourites(page));
  };

  React.useEffect(() => {
    fetchMyFavourites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (getFavourites.loading) {
    return <div>loading . . .</div>;
  }

  if (getFavourites.error !== "") {
    return <p>{getFavourites.error}</p>;
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
      {console.log("getfavourites", getFavourites)}
      {getFavourites.data.map((element) => {
        return <div key={element.id}>{element.shirt_name}</div>;
      })}
    </div>
  );
};

export default Profile;
