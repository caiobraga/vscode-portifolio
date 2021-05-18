import Link from "next/link";
import styles from "../styles/HomePage.module.css";

const ArticulesPage = () => {
  return (
    <>
      <h1>Currículo</h1>

      <div className={styles.buttons}>
          <Link href="/CV_CaioBraga_PT_BR.pdf">
            <button className={styles.contained}>Baixe o Currículo</button>
          </Link>
          <Link href="/CV_CaioBraga_EN.pdf">
            <button className={styles.outlined}>Dowloand the CV</button>
          </Link>
        </div>
    </>
  );
};


export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}


export default ArticulesPage;
