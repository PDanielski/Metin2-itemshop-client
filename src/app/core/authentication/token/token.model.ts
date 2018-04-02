import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';

export class Token {
    protected id: string;
    protected roles: string[];
    protected username: string;
    protected iat: number;
    protected exp: number;

    constructor(id:string, roles:string[], username:string, iat: number, exp:number){
        this.id = id;
        this.roles = roles;
        this.username = username;
        this.iat = iat;
        this.exp = exp;
    }

    static fromJSON(jsonString){
        let jsonObject = JSON.parse(jsonString);
        return new Token(jsonObject.id, jsonObject.roles, jsonObject.username, jsonObject.iat, jsonObject.exp);
    }

    static fromJWT(jwtString){
        let tokenObject = jwt_decode(jwtString);
        tokenObject.id = jwtString;
        return Token.fromJSON(JSON.stringify(tokenObject));
    }

    getId(): string {
        return this.id;
    }
    
    getRoles(): string[]{
        return this.roles;
    }

    getUsername(): string {
        return this.username;
    }

    isExpired(){
        return this.exp < moment.utc().unix();
    }

    toJson(){
        return JSON.stringify(this);
    }

  }
