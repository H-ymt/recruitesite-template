import styles from './index.module.scss';

type Props = {
  activeId: string;
  ids: string[];
  linkTexts: string[];
};

export default function SideNavigation({ activeId, ids, linkTexts }: Props) {
  return (
    <nav className={styles.sideNavigation}>
      <ul className={styles.sideNavigationList}>
        {ids.map((id, index) => (
          <li key={index}>
            <a
              href={`#${id}`}
              className={`${styles.sideMenuLink} ${
                activeId === id ? styles.isActive : ''
              }`}
            >
              {linkTexts[index]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
