import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../../shared/components/FormElements/Button";
import { PlaceListType } from "../../types";
import PlaceItem from "./PlaceItem";

export default function PlaceList({ items }: PlaceListType) {
  const navigator = useNavigate();
  if (items.length === 0) {
    return (
      <>
        <StNoPlaceText>No place found. Maybe create one?</StNoPlaceText>
        <Button onClick={() => navigator("/places/new")}>Share Place</Button>
      </>
    );
  }
  return (
    <StUl>
      {items.map((item) => {
        return (
          <PlaceItem
            key={item.id}
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            description={item.description}
            address={item.address}
            creatorId={item.creator}
            coordinates={item.location}
          />
        );
      })}
    </StUl>
  );
}
const StNoPlaceText = styled.h2``;
const StShareBtn = styled.button``;

const StUl = styled.ul``;
