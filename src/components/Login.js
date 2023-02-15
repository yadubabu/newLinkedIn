import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { signIn } from "../redux/actions/userActions";
import { Navigate } from "react-router";

const Login = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  return (
    <Container>
      {user && <Navigate to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" />
        </a>
        <div>
          <Join>Join Now</Join>
        </div>
      </Nav>
      <div>
        <button onClick={() => dispatch(signIn())}>Sign in with Google</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;
const Nav = styled.nav`
  max-width: 1028px;
  height: auto;
  padding: 12px 0 16px;
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 16px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
`;
export default Login;
