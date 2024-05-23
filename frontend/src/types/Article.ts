export type Article = {
  id?: React.Key;
  cover?: any;
  title: string;
  des?: string;
  category: string;
  views?: Number;
  likes?: Number;
  author: { cover?: any; name: string; joined_on: string };
  short_name?: string;
  createdAt?: string;
  updatedAt?: string;
};
