export interface UsersType {
  id: string;
  image: string;
  name: string;
  placeCount: number;
}

export interface UsersListProps {
  items: UsersType[];
}
