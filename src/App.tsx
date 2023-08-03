import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import GlobalStyles from "./styles/GlobalStyles";
import Users from "./user/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MainNavigation />
      <StMain>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
        </Routes>
      </StMain>
    </BrowserRouter>
  );
}

export default App;

const StMain = styled.main`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
