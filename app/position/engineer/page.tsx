"use client";

import styles from "./page.module.scss";
import GridLayout from "@/app/_components/GridLayout";
import Sheet from "@/app/_components/Sheet";
import { useEffect, useId, useRef, useState } from "react";

export default function Page() {
  const aboutId = useId();
  const contentId = useId();
  const flowId = useId();

  const [activeId, setActiveId] = useState("");
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const flowRef = useRef(null);

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
        rootMargin: "0px 0px -200px 0px",
        threshold: 1,
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (flowRef.current) observer.observe(flowRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Sheet>
      <h1 className={styles.pageTitle}>
        <span className={styles.pageTitleEn}>Engineer</span>
        エンジニア採用
      </h1>

      <GridLayout>
        <nav className={styles.sideNavigation}>
          <ul className={styles.sideNavigationList}>
            <li>
              <a
                href={`#${aboutId}`}
                className={`${styles.sideMenuLink} ${activeId === aboutId ? styles.isActive : ""}`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href={`#${contentId}`}
                className={`${styles.sideMenuLink} ${
                  activeId === contentId ? styles.isActive : ""
                }`}
              >
                Content
              </a>
            </li>

            <li>
              <a
                href={`#${flowId}`}
                className={`${styles.sideMenuLink} ${activeId === flowId ? styles.isActive : ""}`}
              >
                Flow
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.mainContent}>
          <section id={aboutId} ref={aboutRef} className={styles.section}>
            <h2>About</h2>
            <p>アバウトセクションです</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur, maiores
              similique explicabo eum voluptatem quo commodi nostrum. Doloremque totam, blanditiis
              dolores praesentium vel fugit accusamus soluta. Laborum incidunt dolorum doloremque
              quasi earum deserunt quod id hic perferendis mollitia! Commodi nulla amet dolor vero
              mollitia eaque corrupti similique repudiandae recusandae, minus, quas id officiis.
              Quos minima optio ratione explicabo perferendis eligendi at distinctio reprehenderit
              omnis, numquam obcaecati veniam quisquam et tenetur quam nam voluptas vitae
              dignissimos pariatur maxime quidem sapiente, quasi repudiandae. Nostrum praesentium
              laudantium quod consectetur a quo nesciunt, fuga quis minus, dolorum sint non
              assumenda voluptates facere tenetur doloribus atque reprehenderit modi quidem ullam
              mollitia beatae omnis tempora. Impedit praesentium suscipit dolorum facere sint
              nesciunt perferendis dolores, iure perspiciatis soluta quaerat et voluptatem placeat
              dolore quasi illo totam maxime. Nihil amet harum quos similique assumenda,
              consequuntur mollitia. Cupiditate, dignissimos. Dolor harum corporis doloribus illo
              architecto consequatur deleniti dolorem obcaecati nisi. Suscipit eligendi cumque illum
              eius vel culpa perferendis distinctio perspiciatis harum corporis doloribus
              repellendus, officia natus aliquam! Sit, nihil! Nihil consectetur amet ipsum fugiat at
              molestiae deleniti incidunt officiis? Voluptates dicta perferendis optio nulla quos
              voluptate accusamus corporis quae, iure rem eligendi tempore eveniet odio modi
              incidunt saepe animi? Temporibus commodi non voluptatibus officia nostrum odio quas
              natus consequatur corporis, autem deserunt ipsam asperiores quisquam exercitationem
              sunt. Suscipit corrupti delectus iste eveniet in modi quam optio consequatur animi,
              accusamus quasi, fuga amet fugit dignissimos ipsam laudantium odit aspernatur dolores
              cum nostrum repudiandae? Atque aperiam consequatur officiis ducimus ipsa fugiat?
              Culpa, nam, maiores ratione perspiciatis minima aliquam sed voluptatibus facilis quos
              adipisci velit maxime a, vero non at quaerat corporis dolorem quia alias debitis
              labore laudantium magnam quas. Doloribus, maiores? Corrupti, accusamus, praesentium
              dolore nam autem facere dolores officiis quaerat est mollitia amet quasi omnis vero
              harum labore cum.
            </p>
          </section>

          <section id={contentId} ref={contentRef} className={styles.section}>
            <h2>Content</h2>
            <p>コンテンツセクションです</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eligendi magnam
              libero. Quis quas ut quam? Quia nesciunt odit veritatis quo magnam nisi vel commodi
              dolore, debitis ratione quae, qui, nulla quos recusandae iusto non sit laboriosam
              numquam! Voluptatum cum distinctio expedita iste nisi aut, mollitia quia
              exercitationem aperiam blanditiis excepturi repellendus unde. Accusamus, eaque
              numquam! Cupiditate necessitatibus dolorum eum totam ratione temporibus ducimus quasi,
              inventore ab quos explicabo aspernatur magni. Sapiente adipisci quis natus vero optio
              quidem quo expedita dignissimos eius dolorem, eum ipsam fugit. Sed, ex ut commodi
              doloremque, est cupiditate soluta cumque consectetur quasi voluptate facere, neque
              itaque deleniti quisquam? Placeat corporis sed facilis tenetur saepe, neque soluta
              consequatur laborum porro quisquam quod dolorum nisi est commodi possimus dolores
              nobis fugiat laboriosam fuga quibusdam nam suscipit, minus natus maiores. Nihil rem
              explicabo debitis cumque repellendus aut id quod dolores adipisci nemo. Aliquid autem
              optio hic possimus fugit nam pariatur dicta dolorum quo quos accusantium est ad neque,
              voluptatum facere, quod ea. Nemo recusandae dolor temporibus iste rerum eos inventore
              eligendi est necessitatibus ducimus a itaque mollitia cum ipsum asperiores, dolores
              vitae, quas quam dignissimos illum iure quae qui? Laborum facere possimus quae
              expedita veritatis pariatur reprehenderit. Eos, quia voluptatum qui unde harum,
              accusamus nostrum repellendus ea quis ullam, inventore commodi cum suscipit obcaecati.
              Sunt, animi placeat facere veritatis aliquam blanditiis rem commodi eaque beatae
              tempora eveniet mollitia cum molestiae quidem nam laudantium vitae quod quae
              laboriosam, esse ex! Sint exercitationem adipisci earum odio, maiores enim sed iste
              dicta quia quis quidem perspiciatis ad consequatur iure id fugiat ipsa officia
              corporis unde minima eius vitae? Debitis inventore veritatis, sed consequatur sunt,
              mollitia perspiciatis minima tenetur obcaecati eos expedita, ipsam ab? Aspernatur
              sapiente velit explicabo doloribus labore veritatis, animi, dolore quasi, enim eius
              architecto perspiciatis fugiat? Cumque, incidunt quidem.
            </p>
          </section>

          <section id={flowId} ref={flowRef} className={styles.section}>
            <h2>Flow</h2>
            <p>フローセクションです</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ut, dignissimos
              illo provident doloremque soluta perferendis cupiditate blanditiis quae obcaecati iste
              odit hic officiis reprehenderit enim voluptatem, aut suscipit dolore molestiae culpa.
              Et optio voluptatem, molestias ratione expedita commodi placeat accusantium culpa
              voluptas magnam, quos vitae sint assumenda nam possimus obcaecati hic totam sunt omnis
              at exercitationem! Amet in earum vitae atque omnis, quam facere, assumenda aliquam rem
              sequi, rerum neque fugiat. Culpa veritatis delectus animi earum? Ipsam mollitia
              voluptates, enim id dolor tenetur possimus labore reiciendis inventore quod officia
              sed doloribus quidem odio assumenda nam necessitatibus quaerat fugit. Nulla repellat
              unde fuga quisquam excepturi, modi ratione in laborum soluta ex dolores officia eum
              placeat magni molestiae esse libero eius cupiditate perferendis nemo deleniti aut! Nam
              earum tempore, iure voluptatum soluta quos, veritatis blanditiis illo nemo est
              reiciendis accusantium consectetur natus voluptas ipsam? Temporibus porro at veritatis
              officia. Totam, quasi! Culpa suscipit dolorem, blanditiis harum, molestias beatae
              minus aspernatur aperiam, architecto nobis facere. Vitae corrupti, atque reiciendis
              inventore saepe maxime! Accusantium voluptas officiis dolorum quisquam sed id, amet
              quam sint cum aliquam veritatis voluptatem commodi debitis eaque unde quae minus
              adipisci, fugiat corrupti tempore quasi! Eius velit, asperiores voluptate aliquam
              inventore debitis ipsa corporis deserunt magnam ex cumque soluta impedit odio
              laboriosam sequi explicabo totam animi deleniti fugiat quas. Distinctio nisi ullam
              dicta temporibus totam, doloremque quibusdam. Unde omnis quo id eius ducimus
              voluptates vitae repudiandae blanditiis harum modi molestiae, placeat, vero deserunt,
              qui inventore quam. Officia vel illum quae, quisquam cupiditate quos adipisci unde
              culpa ad quaerat nobis fugiat earum eos, eius iure eveniet ipsum veritatis at
              voluptates minus sit maxime placeat? Earum repudiandae tempore molestiae eligendi
              fugiat amet iure saepe, quasi consequatur. Velit nostrum adipisci, minima, cum maiores
              deserunt, ducimus eligendi dolor provident illum odio dolorem molestiae libero.
            </p>
          </section>
        </div>
      </GridLayout>
    </Sheet>
  );
}
