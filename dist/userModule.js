"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, surname, tNumber, interests) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._tNumber = tNumber;
        this._interests = interests;
    }
    setAll(id, name, surname, tNumber, interests) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._tNumber = tNumber;
        this._interests = interests;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
}
exports.default = User;
