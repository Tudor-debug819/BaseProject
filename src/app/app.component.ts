import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    HttpClientModule,
    CommonModule,
    FooterComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService],
})
export class AppComponent implements OnInit {
  menuConfig: any;

  sidebarConfig = {
    enabled: true, 
    isExpanded: true, 
  };

  footerConfig = {
    sticky: true,
    enabled: true,
  };

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // Load menu configuration from JSON
    this.menuService.getMenuConfig().subscribe((config) => {
      this.menuConfig = config;
      console.log(config);
    });
  }

  toggleSidebar(): void {
    // Toggle the sidebar's expanded state
    this.sidebarConfig.isExpanded = !this.sidebarConfig.isExpanded;
  }
}
