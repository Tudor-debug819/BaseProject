import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuConfig } from './menu-config.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private configUrl = 'assets/menu-config.json'; // Path to JSON file

  constructor(private http: HttpClient) {}

  getMenuConfig(): Observable<MenuConfig> {
    return this.http.get<MenuConfig>(this.configUrl);
  }
}
