"use client";

import styles from "./page.module.scss";
import GridLayout from "@/app/_components/GridLayout";
import Sheet from "@/app/_components/Sheet";

export default function Page() {
  return (
    <Sheet>
      <h1>エンジニア採用</h1>
      <p>このページはエンジニア採用の流れを説明します</p>

      <GridLayout>
        <nav className={styles.sideNavigation}>
          <ul className={styles.sideNavigationList}>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#content">Content</a>
            </li>

            <li>
              <a href="#flow">Flow</a>
            </li>
          </ul>
        </nav>

        <div className={styles.mainContent}>
          <section id="about">
            <h2>About</h2>
            <p>アバウトセクションです</p>
          </section>

          <section id="content">
            <h2>Content</h2>
            <p>コンテンツセクションです</p>
          </section>

          <section id="flow">
            <h2>Flow</h2>
            <p>フローセクションです</p>
          </section>
        </div>
      </GridLayout>
    </Sheet>
  );
}
