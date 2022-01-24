export interface DataItem {
  collectionName: string;
  price: number;
  description: string;
  month: number;
  date: string;
  filterDate: number;
  _id: string;
}

export interface CollectionItem {
  collection: string;
  monthPrice: number;
  totalPrice: number;
  prev?: string;
  _id?: string;
}

export interface AppContextProps {
  purchases: DataItem[];
  categories: CollectionItem[];
}
