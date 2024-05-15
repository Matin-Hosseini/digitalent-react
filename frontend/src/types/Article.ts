export type Article = {
  id?: React.Key;
  cover?: any;
  title?: String;
  views?: Number;
  likes?: Number;
  subtitle?: String;
  author: { cover?: any; name: String; joined_on: String };
  short_name?: String;
  createdAt?: String;
  updatedAt?: String;
};
