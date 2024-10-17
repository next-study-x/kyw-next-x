import { postImage } from "./PostImage";
import { User } from "./User";

export interface PostItem {
  postId: number;
  User: User;
  content: string;
  createdAt: Date;
  Images: postImage[];
}
