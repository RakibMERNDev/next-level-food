import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from './main-header.module.css'

const MainHeader = () => {


  return (
    <header>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg.src} width={100} height={100} alt="A plate with food on it" />
        NextLevelFood
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
