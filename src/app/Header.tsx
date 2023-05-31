import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/todo">
        Todos
      </Link>
    </nav>
  );
}

export default Header;