import React, { FormEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import useFormHook from "../../shared/hooks/useFormHook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validator";

const DUMMYPLACE = [
  {
    id: "p1",
    imageUrl:
      "https://hanok.jeonju.go.kr/uploads/store/2022/01/043095685599bdd9d1740c4fceee4370.jpg",
    title: "전주 한옥마을",
    description: "전주 놀러갔을때 찍은 한옥 한 채",
    address: "전라북도 전주시 완산구 기린대로 99",
    creator: "u1",
    location: {
      lat: 35.8147082,
      lng: 127.1526319,
    },
  },
  {
    id: "p2",
    imageUrl:
      "https://taichung.travel/content/images/attractions/16027/1024x768_Filedata635853420852812608.jpg",
    title: "대만 루체성당",
    description: "타이중에 위치한 루체성당",
    address: "407 대만 Taichung City, Xitun District, 台灣大道四段1727號",
    creator: "u2",
    location: {
      lat: 24.1803006,
      lng: 120.6017675,
    },
  },
  {
    id: "p3",
    imageUrl:
      "https://www.hotelscombined.co.kr/rimg/dimg/74/0d/4a901c8c-city-10161-172d02ff173.jpg?width=1366&height=768&xhint=3940&yhint=1553&crop=true",
    title: "중국 허페이",
    description: "허페이 바오흐어공원에서 한 컷",
    address: "72 Wuhu Rd, Baohe District, Hefei, Anhui, 중국 230002",
    creator: "u3",
    location: {
      lat: 31.8571051,
      lng: 117.2935565,
    },
  },
];

export default function UpdatePlace() {
  const placeId = useParams().placeId;
  const [formState, inputHandler, setFormData] = useFormHook(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
    },
    false
  );

  const identifiedPlace = DUMMYPLACE.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: { value: identifiedPlace?.title, isValid: true },
          description: { value: identifiedPlace?.description, isValid: true },
        },
        true
      );
    }
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("제출성공!");
  };

  if (!identifiedPlace) {
    return <h2>Could not find place!</h2>;
  }

  if (!formState.inputs.title.value) {
    return <h2>Loading...</h2>;
  }

  return (
    <StForm onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        propsInitialValue={formState.inputs.title.value}
        propsInitialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min 5 characters)."
        onInput={inputHandler}
        propsInitialValue={formState.inputs.description.value}
        propsInitialValid={formState.inputs.description.isValid}
      />
      <Button disabled={!formState.isValid}>UPDATE PLACE</Button>
    </StForm>
  );
}

const StForm = styled.form`
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background: white;
`;
