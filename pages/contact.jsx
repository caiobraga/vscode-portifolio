const ContactPage = () => {
  const data={
    email: "{caiotagb@gmail.com}",
    linkedin:"https://www.linkedin.com/in/caio-braga-3038b5147/",
  }
  return (
    <>
      <h1>Contact Page</h1>
      <br/><br/>
      <h3><pre>
      <code>
      @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400&display=swap');
<br/>
*,
*::before,
*::after {'{'}
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  {'}'}<br/><br></br>
  .body{'{'}<br/>
        background-color: #eee; 
        <br/>{'}'}

        <br/>
        <br/>
        .email .caiotagb@gmail.com{'{'} <br/>
        color: red;<br/>
        display: grid;<br/>
        {'}'}<br/>

        <br/>
        <br/>
        .linkedin <a href="https://www.linkedin.com/in/caio-braga-3038b5147/">.https://www.linkedin.com/in/caio-braga-3038b5147/</a>{'{'} <br/>
        display: flex;<br/>
        margin-right: 0.75rem;<br/>
        height: 24px;<br/>
        align-items: center;<br/>
        padding: 0 0.2rem;<br/>
        cursor: pointer;<br/>
        font-family: 'Source Sans Pro', sans-serif;<br/>
        {'}'}<br/>

        <br/>
        <br/>
        .instagram <a href="https://www.instagram.com/caio.g.braga/">.https://www.instagram.com/caio.g.braga/</a>{'{'} <br/>
        background: var(--accent-color);<br/>
        color: white;<br/>
        {'}'}<br/>

        <br/>
        <br/>
        .blog <a href="https://programador-de-quintal.webnode.com/">.https://programador-de-quintal.webnode.com/</a>{'{'} <br/>
        padding: 2rem 1rem;<br/>
        {'}'}<br/>

        
       
      </code>
    </pre></h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
