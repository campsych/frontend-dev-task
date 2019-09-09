export interface User {
    birthDate: string;
    firstName: string;
    lastName: string;
    gender: string;
    created: string;
}

export class User{
    constructor(
        public firstName: string,
        public lastName: string,
        public gender: string,
        public birthDate: string,
        public created: string
    ) {}
}