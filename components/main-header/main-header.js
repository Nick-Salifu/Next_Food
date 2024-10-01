import Link from "next/link";

import logoImg from "@/assets/logo.png"
import styles from "@/components/main-header/main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from '@/components/main-header/main-header-background';
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <Image src={logoImg} alt="A tray of food" priority/>
                    NextLevel Foods
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                           <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
    
}