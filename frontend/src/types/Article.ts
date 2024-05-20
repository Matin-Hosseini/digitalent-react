export type Article = {
  id?: React.Key;
  cover?: any;
  title?: string;
  views?: Number;
  likes?: Number;
  subtitle?: string;
  author: { cover?: any; name: string; joined_on: string };
  short_name?: string;
  createdAt?: string;
  updatedAt?: string;
};
