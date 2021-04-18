export class User {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate: string
    ) {}

    get token() {
        // inform josh and max about this.
        // not sure what happen but angular 11 if we compare
        // new Date() > this._tokenExpirationDate will break the code
        // im remove new to solve the problem.
        if (!this._tokenExpirationDate || Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}