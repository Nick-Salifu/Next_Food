import Link from "next/link";
import styles from "@/components/header/main-header.module.css"

import logoImg from "@/assets/logo.png"

export default function MainHeader() {
    return <header className={styles.header}>
        <Link href="/" className={styles.logo}>
            <img src={logoImg.src} alt="A plate of food" />
            NextLevel Foods
        </Link>

        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Visit Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}