import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [CommonModule],
})
export class FooterComponent {
  @Input() sticky: boolean = false; // Determines if the footer is sticky
  @Input() enabled: boolean = true; // Determines if the footer is displayed
}