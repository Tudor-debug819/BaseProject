export interface MenuItem {
  label: string;
  route: string;
  enabled: boolean;
}

export interface MenuConfig {
  sticky: boolean;
  transparent: boolean;
  visible: boolean;
  items: MenuItem[];
}
