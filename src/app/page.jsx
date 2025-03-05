import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";


export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Better Design For Digital Products</h1>
      <p className={styles.description}>
        Turning your idea into reality. We bring together the teams
         from the global tech industry.
      </p>
      <Button url="/Portfolio" text="See Our Works"/>
    </div>
    <div className={styles.item}>
      <Image src="/hero.jpg" fill alt="" className={styles.img}/>
    </div>
   </div>
  );
}
 