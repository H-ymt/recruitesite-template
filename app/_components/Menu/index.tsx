'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';
import styles from './index.module.scss';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Menu() {
  const pathname = usePathname();
  const Link = ({ href, ...props }: Props) => {
    const isActive = pathname === href;

    return (
      <NextLink
        href={href}
        passHref
        legacyBehavior
      >
        <NavigationMenu.Link
          className={styles.navigationMenuLink}
          active={isActive}
          {...props}
        />
      </NextLink>
    );
  };

  return (
    <>
      <NavigationMenu.Root className={styles.navigationMenuRoot}>
        <NavigationMenu.List className={styles.navigationMenuList}>
          <NavigationMenu.Item
            className={`${styles.navigationMenuItem} ${
              pathname === '/about' ? styles.isActive : ''
            }`}
          >
            <Link href='/about'>企業情報</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className={styles.navigationMenuItem}>
            <NavigationMenu.Trigger className={styles.navigationMenuTrigger}>
              職種から探す
              <ChevronDown
                size={16}
                strokeWidth={2}
                className={styles.chevron}
                aria-hidden='true'
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.navigationMenuContent}>
              <ul className={styles.navigationMenuContentList}>
                <li
                  className={`${styles.navigationMenuContentItem} ${
                    pathname === '/position/engineer' ? styles.isActive : ''
                  }`}
                >
                  <Link href='/position/engineer'>エンジニア</Link>
                </li>
                <li
                  className={`${styles.navigationMenuContentItem} ${
                    pathname === '/position/designer' ? styles.isActive : ''
                  }`}
                >
                  <Link href='/position/designer'>Webデザイナー</Link>
                </li>
                <li
                  className={`${styles.navigationMenuContentItem} ${
                    pathname === '/position/customer' ? styles.isActive : ''
                  }`}
                >
                  <Link href='/position/customer'>カスタマー</Link>
                </li>
                <li
                  className={`${styles.navigationMenuContentItem} ${
                    pathname === '/position/crm' ? styles.isActive : ''
                  }`}
                >
                  <Link href='/position/crm'>CRM</Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item
            className={`${styles.navigationMenuItem} ${
              pathname === '/new-graduates' ? styles.isActive : ''
            }`}
          >
            <Link href='/new-graduates'>新卒採用</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item
            className={`${styles.navigationMenuItem} ${
              pathname === '/flow' ? styles.isActive : ''
            }`}
          >
            <Link href='/flow'>選考フロー</Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item
            className={`${styles.navigationMenuItem} ${
              pathname === '/interview' ? styles.isActive : ''
            }`}
          >
            <Link href='/interview'>社員インタビュー</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <div className='ViewportPosition'>
          <NavigationMenu.Viewport className='navigationMenuViewport' />
        </div>
      </NavigationMenu.Root>
    </>
  );
}
