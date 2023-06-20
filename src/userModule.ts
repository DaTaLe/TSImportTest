type interests = Array<[number, string]>

interface IUser {
    id: number;
    // name: string;
    // surname: string;
    // tNumber: number;
    // interests: interests;
}

export default class User implements IUser{
    protected _id: number;
    protected _name: string;
    protected _surname: string;
    protected _tNumber: number;
    protected _interests: interests;

    constructor(id: number, name: string, surname: string, tNumber: number, interests: interests) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._tNumber = tNumber;
        this._interests = interests;
    }

    setAll(id: number, name: string, surname: string, tNumber: number, interests: interests) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._tNumber = tNumber;
        this._interests = interests;
    }

    set id(id: number){
        this._id = id;
    }

    get id(): number{
        return this._id
    }

}