import { addFavourite, getSingleShirt } from "../redux/actions/wear";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

const Shirt = (props) => {
  const shirtId = props.match.params.id;
  const { user: currentUser } = useSelector((state) => state.auth);
  const getShirt = useSelector((state) => state.getSingleShirt);
  const dispatch = useDispatch();

  const fetchSingleShirt = (shirtId) => {
    dispatch(getSingleShirt(shirtId));
  };

  React.useEffect(() => {
    fetchSingleShirt(shirtId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shirtData = getShirt.data[shirtId];


  const handleFavourite = () => {
    dispatch(addFavourite(shirtData.id))
  }

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (getShirt.loading) {
    return <div>loading . . .</div>;
  }

  if (getShirt.error !== "") {
    return <p>{getShirt.error}</p>;
  }

  if (!_.isEmpty(getShirt.data[shirtId])) {
    return (
      <div>
        <button onClick={handleFavourite}>Add to favourites</button>
       {shirtData.name}
      </div>
    );
  }

  return <div>Nothing to Show</div>;
};

export default Shirt;
