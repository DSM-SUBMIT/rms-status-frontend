export type errorContentArrayType = {
  title: string;
  posts: Array<postsArrayType>;
  affected_on: string;
  severity: string;
  date: string;
};

export type postsArrayType = {
  title: string;
  date: string;
  content: string;
};
