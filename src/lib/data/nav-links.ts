export interface Navlink {
  id: number;
  label: string;
  href: string;
}

export const NAV_LINKS: Navlink[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Contact", href: "/contact" },
  { id: 3, label: "About", href: "/about" },
  { id: 4, label: "Sign up", href: "/sign-up" },
];
