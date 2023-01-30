export default interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
  picturePath: string;
  friends?: Array<string>;
  location?: string;
  occupation?: string;
  viewedProfile: number;
  impressions: number;
  createdAt?: Date;
  updatedAt?: Date;
}
