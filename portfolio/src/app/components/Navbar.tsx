import Link from "next/link";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}{" "}
      </ul>
    </nav>
  );
};
