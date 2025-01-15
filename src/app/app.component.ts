import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, HeaderComponent, HttpClientModule, CommonModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService] // Optionally provide MenuService explicitly (if needed)
})
export class AppComponent implements OnInit {
  menuConfig: any;

  footerConfig = {
    sticky: true, // Make the footer sticky
    enabled: true, // Display the footer
  };

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // Load menu configuration from JSON
    this.menuService.getMenuConfig().subscribe((config) => {
      this.menuConfig = config;
      console.log(config);
      
    });
    
  }
}
