import { Component, Input } from '@angular/core';
import { Language } from './language-switcher.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  @Input() enabled: boolean = true; // Determines if the switcher is visible
  @Input() languages: Language[] = []; // List of languages

  changeLanguage(language: Language): void {
    if (language.enabled) {
      console.log(`Language changed to: ${language.name}`);
      
    }
  }

}
