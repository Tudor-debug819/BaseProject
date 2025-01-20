import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuConfig } from '../menu-config.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() config!: MenuConfig;
  @Input() sidebarEnabled: boolean = false; 
  @Output() sidebarToggle = new EventEmitter<void>(); 

  toggleSidebar(): void {
    this.sidebarToggle.emit(); 
  }
}
