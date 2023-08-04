import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../shared/components/FormElements/Button";
import Map from "../../shared/components/Map/Map";
import Modal from "../../shared/components/UIElements/Modal";
import { LocationType } from "../../types";

interface PlaceItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  address: string;
  creatorId: string;
  coordinates: LocationType;
}

export default function PlaceItem({
  id,
  image,
  title,
  description,
  address,
  creatorId,
  coordinates,
}: PlaceItemProps) {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const navigator = useNavigate();
  const confirmDeleteHandler = () => {
    alert("Delete success");
    setShowConfirmModal(false);
  };

  return (
    <StLi>
      <StImage src={image} alt={title} />
      <StInfoWrapper>
        <StTitle>{title}</StTitle>
        <StAddress>{address}</StAddress>
        <StDescription>{description}</StDescription>
      </StInfoWrapper>
      <StBtnWrapper>
        <Button onClick={() => setShowMap(true)}>VIEW ON MAP</Button>
        <Button onClick={() => navigator(`/places/${id}`)}>EDIT</Button>
        <Button onClick={() => setShowConfirmModal(true)}>DELETE</Button>
      </StBtnWrapper>
      {showMap && (
        <Modal closeModal={() => setShowMap(false)}>
          <Map />
        </Modal>
      )}
      {showConfirmModal && (
        <Modal closeModal={() => setShowConfirmModal(false)}>
          <StConfirmDelete>
            <p>Are you sure?</p>
            <Button onClick={() => confirmDeleteHandler()}>DELETE</Button>
            <Button onClick={() => setShowConfirmModal(false)}>CANCEL</Button>
          </StConfirmDelete>
        </Modal>
      )}
    </StLi>
  );
}

const StLi = styled.li`
  border-radius: 0.5rem;
  width: 30rem;
  border: 1px solid grey;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const StImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;

const StInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;
const StTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const StAddress = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const StDescription = styled.p`
  margin-bottom: 0.5rem;
`;

const StBtnWrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
`;

const StConfirmDelete = styled.div`
  background-color: white;
`;
