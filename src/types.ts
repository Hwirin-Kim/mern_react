export interface UsersType {
  id: string;
  image: string;
  name: string;
  placeCount: number;
}

export interface UsersListProps {
  items: UsersType[];
}

export interface PlaceListType {
  items: PlaceType[];
}

export interface PlaceType {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  address: string;
  creator: string;
  location: LocationType;
}

export interface LocationType {
  lat: number;
  lng: number;
}
