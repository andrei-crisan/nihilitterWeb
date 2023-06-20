import { Message } from "./message";
import { Nihil } from "./nihil";

export interface User {
    id: number;
    firstName: String;
    lastName: String;
    country: String;
    email: String;
    password?: String;
    posts?: Nihil[];
    friends?: User[];
    messages?: Message[];
}