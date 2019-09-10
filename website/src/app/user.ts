export class User {
    id: string;
    birthDate: Date;
    firstName: string;
    lastName: string;
    gender: string;
    created: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
