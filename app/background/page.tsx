import Image from "next/image";
import ViewSource from "../../components/view-source";
import styles from "../../styles.module.css";
import mountains from "../../public/mountains.jpg";

const BackgroundPage = () => (
  <div>
    <ViewSource pathname="app/background/page.tsx" />
    <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src={mountains}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <p className={styles.bgText}>
      Image Component
      <br />
      as a Background
      <br />
      Main thing; classname styles, viewSource pathname page.tsx
    </p>
  </div>
);

export default BackgroundPage;
