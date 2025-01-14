import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, HeaderComponent, HttpClientModule, CommonModule], // Add HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService] // Optionally provide MenuService explicitly (if needed)
})
export class AppComponent implements OnInit {
  menuConfig: any;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // Load menu configuration from JSON
    this.menuService.getMenuConfig().subscribe((config) => {
      this.menuConfig = config;
      console.log(config);
      
    });
    
  }
}
