import React from "react";
import { styled } from "styled-components";
import { UsersListProps } from "../../types";
import UserItem from "./UserItem";

export default function UsersList({ items }: UsersListProps) {
  if (items.length === 0) {
    return (
      <StCenterDiv>
        <StNotFound>유저를 찾을수 없습니다.</StNotFound>
      </StCenterDiv>
    );
  }
  return (
    <Stul>
      {items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.placeCount}
          />
        );
      })}
    </Stul>
  );
}

const StContainer = styled.div``;

const StCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StNotFound = styled.div`
  font-weight: bold;
`;

const Stul = styled.ul``;
