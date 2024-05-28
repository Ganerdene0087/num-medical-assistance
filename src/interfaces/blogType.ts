export interface IBlog {
  _id: string;
  authorId: string;
  title: string;
  content: string;
  date: string;
  thumb: string;
  createdAt?: string;
  updatedAt?: string;
}
