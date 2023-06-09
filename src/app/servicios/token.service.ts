import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  roles: Array<string> = [];
  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public setAuthorities(authorities: Array<string>): void {
    window.sessionStorage.removeItem(AUHORITIES_KEY);
    window.sessionStorage.setItem(AUHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): Array<string> {
    this.roles = [];
    if(sessionStorage.getItem(AUHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUHORITIES_KEY)!).forEach((authority:any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
