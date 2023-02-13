export type Comments = {
  comments: Comment[];
  error: string;
}

export type Comment = {
  usename: string;
  text: string;
  track: string;
  _id: string;
}