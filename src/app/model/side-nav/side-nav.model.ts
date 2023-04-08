export interface SideNavList {
  label: string;
  url: string;
  icon: string;
  visible?: boolean;
  children?: SideNavChildrenList[]
}

export interface SideNavChildrenList {
  label: string;
  url: string;
  icon: string;
}
