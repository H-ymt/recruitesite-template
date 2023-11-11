"use client";

import React, { useEffect, useMemo, useRef } from "react";
import Sheet from "../_components/Sheet";
import styles from "./page.module.scss";

function useIntersectionRefs(): React.RefObject<HTMLLIElement>[] {
  return [
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
  ];
}

export default function Page() {
  const intersectionRefs = useIntersectionRefs();

  useEffect(() => {
    const observers = intersectionRefs.map(
      (ref) =>
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add(styles.isActive);
              } else {
                entry.target.classList.remove(styles.isActive);
              }
            });
          },
          {
            rootMargin: "-50%",
          }
        )
    );

    intersectionRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      intersectionRefs.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, [intersectionRefs]);

  return (
    <Sheet>
      <div className={styles.heading}>
        <h1 className={styles.headingTitle}>
          <span className={styles.pageTitleEn}>Flow</span>
          採用フロー
        </h1>
        <p className={styles.headingText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, non!
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <ol className={styles.flowList}>
        <li className={styles.flowItem} ref={intersectionRefs[0]}>
          <h2 className={styles.flowItemTitle}>01 応募（エントリー）</h2>
          <p className={styles.flowItemText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, fuga.
          </p>
        </li>
        <li className={styles.flowItem} ref={intersectionRefs[1]}>
          <h2 className={styles.flowItemTitle}>02 書類選考</h2>
          <p className={styles.flowItemText}>Lorem ipsum dolor sit.</p>
        </li>
        <li className={styles.flowItem} ref={intersectionRefs[2]}>
          <h2 className={styles.flowItemTitle}>03 面接（原則2回）</h2>
          <p className={styles.flowItemText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Vel incidunt quam fuga repudiandae excepturi consectetur quidem
            voluptatem aliquid.
          </p>
        </li>
        <li className={styles.flowItem} ref={intersectionRefs[3]}>
          <h2 className={styles.flowItemTitle}>04 内定</h2>
          <p className={styles.flowItemText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Soluta modi aperiam ipsum!
          </p>
        </li>
        <li className={styles.flowItem} ref={intersectionRefs[4]}>
          <h2 className={styles.flowItemTitle}>05 入社</h2>
          <p className={styles.flowItemText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
        </li>
      </ol>
    </Sheet>
  );
}
