import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="sobre.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contato.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projetos.js" path="/projects" />
      <Tab icon="/json_icon.svg" filename="CV.pdf" path="/articles" />
    </div>
  );
};

export default Tabsbar;
