import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ProjectsPage = () => {
  let articles = [
    {
      id: 1,
      article:{
        url:"https://www.linkedin.com/posts/caio-braga-3038b5147_backend-react-orgafin-activity-6753823545605820416--x23/",
        cover_image:"/tccImage.PNG",
        title:"TCC - Orgafin",
        description:"Uma agenda de organização financeira feita para o TCC da escola técnica. Foi usado react para o front-end e php + mysql no backend"
      }
    },
    {
      id: 1,
      article:{
        url:"https://www.linkedin.com/posts/caio-braga-3038b5147_ano-passado-fiz-um-projeto-para-testar-um-activity-6773228043222704128-dIbt/",
        cover_image:"/cloundcam.jpeg",
        title:"Cloud Cam",
        description:"Cloud Cam é um app de fotos em nuvem feito em react native. Esse projeto foi feito para testar os conhecimentos no desenvolvimento mobile hibrido, bem como o uso do banco  de dados firebase para autenticação e armazenamento de dados"
      }
    },
    {
      id: 1,
      article:{
        url:"https://quebragalho.web.app/",
        cover_image:"/quebragalho.jpeg",
        title:"Quebra galho",
        description:"Quebra galho é um site responsivo. autamente versátil feito em react com banco de dados na núvem! Ele permite que usuários procurem profissionáis na região"
      }
    },
    {
      id: 1,
      article:{
        url:"https://top-polos-kex3vk34i-caiobraga.vercel.app/",
        cover_image:"/shop-logo.svg ",
        title:"Top Polos",
        description:"top polos foi uma loja feita a pedido de cliente. Ela foi feita no conceito de Headless eCommerce e tem uma das maiores notas possíveis em eficiência por utilizar de next.js + react e ser hospedade no vercel tanto seu front-end quanto seu backend. Além disso a loja faz integração com uma GraphQL API"
      }
    },
  ];
  return (
    <>
      <div className={styles.container}>
        {articles.map((article) => {
          return(<ArticleCard key={article.id} article={article.article} />)
        }
        )
        }
      </div>
    </>
  );
};





export default ProjectsPage;
