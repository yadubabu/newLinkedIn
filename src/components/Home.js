import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import styledComponents from "styled-components";
import { signOutApi } from "../redux/actions/userActions";

const Home = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  //   const photo = require(`${user.photoURL}`);
  //   console.log(photo);
  return (
    <div>
      {user === null ? <Navigate to="/" /> : ""}
      <User>
        {user.photoURL ? (
          <img src={user.photoURL} width="100px" height="100px" />
        ) : (
          ""
        )}
        <button onClick={() => dispatch(signOutApi())}>SignOut</button>
      </User>
    </div>
  );
};
const User = styledComponents.a`

`;
export default Home;
