import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <nav style={{display: "flex", gap: '10px'}}>
      <Link href="/">
        Home
      </Link>
      <Link href="/todo">
        Todos
      </Link>
      <Link href="/search">
        Search
      </Link>
    </nav>
  );
}

export default Header;