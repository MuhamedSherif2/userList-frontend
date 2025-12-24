export interface User {
    _id?: string;
    name: string;
    email: string;
    bio: string;
    createdAt?: Date;
}

export interface IUserResponse{
    message:string,
    data:User[]
}