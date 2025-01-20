import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Language {
  name: string;
  code: string;
  enabled: boolean;
}

export interface LanguageSwitcherConfig {
  enabled: boolean;
  languages: Language[];
}

@Injectable({
  providedIn: 'root',
})
export class LanguageSwitcherService {
  private configUrl = 'assets/language-switcher-config.json';

  constructor(private http: HttpClient) {}

  getConfig(): Observable<LanguageSwitcherConfig> {
    return this.http.get<LanguageSwitcherConfig>(this.configUrl);
  }
}