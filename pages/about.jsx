const AboutPage = () => {
  return (
    <>
    {"<!DOCTYPE html>"}<br/><br/>
    {"<html lang='pt-br'>"}<br/>
    {"<head>"}<br/><br/>
    {"<meta charset='utf-8'>"}<br/><br/>
    {"<title>Sobre</title>"}<br/><br/>
    {"</head>"}<br/><br/>
    {"<body>"}<br/><br/>
    <h3>{"<h3>Sobre<h3/>"}</h3><br/><br/>
    {"<p>"}<p style={{color:"blueviolet"}}>{"Sou um programador front-end em busca de dar o meu melhor na minha profisão e acresentar valor a vida das pessoas que usarem do meu trabalho."}</p>{"<p>"}<br/><br/>
    {"</body>"}<br/>
    {"</html>"}
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Sobre" },
  };
}

export default AboutPage;
