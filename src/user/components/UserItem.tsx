import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { UsersType } from "../../types";

export default function UserItem({ id, image, name, placeCount }: UsersType) {
  const navigator = useNavigate();
  return (
    <Stli onClick={() => navigator(`/${id}/places`)}>
      <StUserItemContent>
        <StUserItemImage src={image} alt={name} />
        <StUserItemInfo>
          <Sth2>{name}</Sth2>
          <Sth3>
            {placeCount}
            {placeCount === 1 ? "Place" : "Places"}
          </Sth3>
        </StUserItemInfo>
      </StUserItemContent>
    </Stli>
  );
}

const Stli = styled.li`
  margin: 1rem;
  width: 8rem;
  height: 13rem;
  border-radius: 0.5rem;
  background-color: black;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ffd900;
    h2 {
      color: black;
    }
    h3 {
      color: black;
    }
  }
`;

const StUserItemContent = styled.div``;

const StUserItemImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
`;

const StUserItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sth2 = styled.h2`
  font-size: 1.8rem;
  color: #ffd900;
`;
const Sth3 = styled.h3`
  font-size: 1.3rem;
  color: white;
`;
