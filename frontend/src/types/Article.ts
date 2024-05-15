export type Article = {
  id?: String;
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
