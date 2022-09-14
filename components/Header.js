import React from "react";
import style from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <h1 className={style.primary_heading}>Neko in Germany</h1>
        <ul className={style.nav_lists}>
          <Link href="/about" className={style.nav_link}>
            <a className={style.nav_link}>
              <li className={style.nav_list}>About</li>
            </a>
          </Link>

          <Link href="/" className={style.nav_link}>
            <a className={style.nav_link}>
              <li className={style.nav_list}>Blog</li>
            </a>
          </Link>
          <a
            href="mailto:neko-germany@gmail.com"
            className={style.nav_link}
            target="_blank"
            rel="noreferrer"
          >
            <li className={style.nav_list}>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
