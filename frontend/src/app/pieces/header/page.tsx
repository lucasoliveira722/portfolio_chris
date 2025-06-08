import Link from "next/link";

export default function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre nós</Link>
                </li>
                <li>
                    <Link href="/articles">Artigos</Link>
                </li>
                <li>
                    <Link href="/contact">Contato</Link>
                </li>
            </ul>
        </header>
    );
}

/* 
Home
Sobre nós
Artigos
Contato
*/