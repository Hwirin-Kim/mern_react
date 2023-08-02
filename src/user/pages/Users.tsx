import React from "react";
import { UsersType } from "../../types";
import UsersList from "../components/UsersList";

export default function Users() {
  const USERS: UsersType[] | [] = [
    {
      id: "u1",
      name: "Jihyo",
      image:
        "https://cdn.hankooki.com/news/photo/202207/9937_13229_1657121047.jpg",
      placeCount: 3,
    },
    {
      id: "u2",
      name: "지효",
      image:
        "https://images.chosun.com/resizer/y7hOZuA2GmrD12gJXHs-jYHanrE=/520x520/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/Y7K4F632E6AKWF4FP5HONHSH6E.jpg",
      placeCount: 2,
    },
    {
      id: "u3",
      name: "죠",
      image:
        "https://cphoto.asiae.co.kr/listimglink/1/2021060412105265495_1622776252.jpg",
      placeCount: 5,
    },
  ];
  return <UsersList items={USERS} />;
}
