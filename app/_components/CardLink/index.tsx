import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  href: string;
  imgUrl: string;
  titleEn: string;
  titleJp: string;
};

export default function CardLink({ href, imgUrl, titleEn, titleJp }: Props) {
  return (
    <Link
      href={href}
      className={styles.card}
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          className={styles.image}
          width={280}
          height={200}
          alt=''
          decoding='async'
        />
      )}
      <div className={styles.body}>
        <b className={styles.titleEn}>{titleEn}</b>
        <p className={styles.titleJp}>{titleJp}</p>
      </div>
      <div className={styles.arrow}>
        <ArrowRight className={styles.arrowRight} />
      </div>
    </Link>
  );
}
