export default interface Post {
  _id?: string;
  userId: string;
  firstName: string;
  lastName: string;
  location?: string;
  description?: string;
  picturePath: string;
  userPicturePath: string;
  likes: any;
  comments: Array<string> | [];
  createdAt?: Date;
  updatedAt?: Date;
}
