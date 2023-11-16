'use client';

import styles from './page.module.scss';
import GridLayout from '@/app/_components/GridLayout';
import Sheet from '@/app/_components/Sheet';
import SideNavigation from '@/app/_components/SideNavigation';
import { useEffect, useId, useRef, useState } from 'react';

export default function Page() {
  const aboutId = useId();
  const capacityId = useId();
  const summaryId = useId();
  const otherId = useId();

  const aboutRef = useRef(null);
  const capacityRef = useRef(null);
  const summaryRef = useRef(null);
  const otherRef = useRef(null);

  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -200px 0px',
        threshold: 1,
      },
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (capacityRef.current) observer.observe(capacityRef.current);
    if (summaryRef.current) observer.observe(summaryRef.current);
    if (otherRef.current) observer.observe(otherRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Sheet>
      <div className={styles.heading}>
        <h1 className={styles.headingTitle}>
          <span className={styles.pageTitleEn}>Engineer</span>
          エンジニア採用
        </h1>
        <p className={styles.headingText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum tempora rem libero dolore
          voluptatibus quas commodi laudantium odio explicabo in ipsum ratione id, aut inventore
          voluptate quasi obcaecati debitis ipsam quae reprehenderit nulla? Nulla esse porro
          voluptate eum odit fuga vero sequi sunt cum quam magnam, accusamus impedit animi aperiam!
        </p>
      </div>

      <GridLayout>
        <div className={styles.sideContent}>
          <div className={styles.sideNavigationWrapper}>
            <SideNavigation
              activeId={activeId}
              ids={[aboutId, capacityId, summaryId, otherId]}
              linkTexts={['職務内容', '応募資格', '勤務概要', 'その他']}
            />
          </div>
        </div>

        <div className={styles.mainContent}>
          <section
            id={aboutId}
            ref={aboutRef}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>職務内容</h2>
            <p className={styles.sectionBody}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, doloribus,
              voluptatem tempore sequi, aut tempora doloremque mollitia culpa corporis porro atque
              fuga. Obcaecati officia corporis natus velit ad? Dolor maiores nobis reprehenderit
              aliquid accusamus esse voluptate, mollitia nihil, porro voluptatem magnam at facilis.
              Sequi, quisquam laboriosam commodi ducimus praesentium autem! Cum suscipit sed quos
              voluptates eius, modi impedit voluptate, praesentium repellendus quibusdam saepe.
              Magni ipsum sapiente reiciendis, iusto autem, nobis suscipit sequi iure facere tenetur
              velit assumenda quas quis at ea aspernatur similique! Dicta, autem odit magnam
              asperiores, veritatis optio minus porro, provident voluptatem aliquam perferendis
              delectus. Ut, magnam! Vel magnam et, cupiditate corporis placeat dolore laboriosam
              repudiandae qui quasi consequuntur assumenda, cumque molestiae voluptate maxime facere
              sequi veniam? Natus in voluptate temporibus iste quam sed expedita sint error
              reiciendis.
            </p>
          </section>

          <section
            id={capacityId}
            ref={capacityRef}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>応募資格</h2>
            <p className={styles.sectionBody}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla natus cumque dolore
              expedita? Asperiores, nisi nostrum! Nobis recusandae architecto voluptates voluptatum.
              Sit ab unde assumenda quaerat quisquam rerum quibusdam iste architecto eos veritatis
              laudantium ipsa quia aperiam error ex hic quo fugiat nisi, perferendis eaque.
              Consequatur error nulla quo eaque commodi doloremque blanditiis incidunt quod impedit
              reiciendis pariatur esse itaque tempora, dolorum facilis et. Iste itaque inventore
              voluptates dicta labore quos temporibus quisquam aspernatur debitis ea minima tenetur
              molestiae consequuntur veniam dolore nobis iure nisi, excepturi asperiores in iusto!
              Et, asperiores eligendi iste eum soluta cupiditate dolorem corporis iure blanditiis.
            </p>
          </section>
          <section
            id={summaryId}
            ref={summaryRef}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>勤務概要</h2>
            <p className={styles.sectionBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repudiandae
              expedita atque excepturi at quo quibusdam odit commodi. Cumque dolores amet, quod
              veniam ipsam unde odio incidunt neque! Neque quo, recusandae laborum atque tenetur
              nisi, dolorum ullam dolorem fugit omnis quisquam tempore a tempora animi veniam earum
              eos! Repellendus temporibus aspernatur aut distinctio doloribus, nisi quasi autem
              neque ipsa! Et dolores rem laborum repellat doloribus cumque, distinctio in fugit
              debitis vel quaerat delectus est nobis, consequuntur soluta at beatae! Dicta, deleniti
              incidunt in quos laboriosam sint consequuntur! Excepturi repudiandae, sunt error,
              quasi fugit id neque obcaecati quaerat officia beatae et iure sapiente nesciunt illum,
              inventore iste deleniti facere ex quis molestias eveniet saepe commodi tempore? Omnis,
              quos esse incidunt repudiandae odio laborum amet earum officiis?
            </p>
          </section>

          <section
            id={otherId}
            ref={otherRef}
            className={styles.section}
          >
            <h2 className={styles.sectionTitle}>その他</h2>
            <p className={styles.sectionBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus cum a
              autem, explicabo eos neque suscipit nobis dolor, cumque, ex magnam eaque. Repellendus
              maxime labore, provident obcaecati beatae totam aliquid amet doloremque dicta odit
              excepturi consectetur eligendi veritatis voluptas rerum aspernatur debitis non
              architecto sunt tempora fugit? Doloribus, tempora. Harum adipisci aliquid voluptatum,
              necessitatibus accusantium odio? Maiores ratione repellendus magnam alias! Totam
              provident quasi, repellendus suscipit quisquam nemo dolorum cum corrupti. Recusandae
              modi tenetur consectetur praesentium ducimus accusantium explicabo dolore, placeat
              tempore odio quisquam dolorem, in non enim eligendi illum qui dolor quibusdam
              laudantium. Minima, voluptatem. Architecto sunt quo in autem culpa doloremque aliquam
              commodi consectetur tempore dolor animi quibusdam accusamus odio qui aliquid illum,
              distinctio itaque reiciendis iste corrupti ea. Delectus quam fuga doloribus cum magni
              error earum quo voluptatibus tenetur dolore eveniet dolorem, sequi est eligendi quasi
              laborum iusto exercitationem. Odit recusandae maxime voluptatibus illum tenetur
              numquam impedit expedita illo harum possimus?
            </p>
          </section>
        </div>
      </GridLayout>
    </Sheet>
  );
}
