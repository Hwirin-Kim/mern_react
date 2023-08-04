import React from "react";
import { UsersType } from "../../types";
import UsersList from "../components/UsersList";

export default function Users() {
  const USERS: UsersType[] | [] = [
    {
      id: "u1",
      name: "도라에몽",
      image: "https://t1.daumcdn.net/cfile/blog/232AF03F5375CD2E21",
      placeCount: 3,
    },
    {
      id: "u2",
      name: "호빵맨",
      image:
        "https://w7.pngwing.com/pngs/944/50/png-transparent-cartoon-character-baikinman-anpanman-hello-kitty-animated-cartoon-anime-cartoon-bread-superman-cartoon-character-television-child.png",
      placeCount: 2,
    },
    {
      id: "u3",
      name: "뽀로로",
      image: "https://t1.daumcdn.net/cfile/tistory/267E7B4B55E7E6CE1F",
      placeCount: 5,
    },
  ];
  return <UsersList items={USERS} />;
}
