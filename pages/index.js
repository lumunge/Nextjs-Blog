import Head from 'next/head'
import Header from '../components/Header';
import styles from '../styles/Header.module.css';

export default function Home({js, prog, ether, nextjs, block}) {

  // const jsArticles = js.articles;
  // const progArticles = prog.articles;
  // const etherArticles = ether.articles;
  // const nextjsArticles = nextjs.articles;
  // const blockArticles = block.articles;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header/>
        </header>

    <main className='main'>
        <div className={styles.hero}>
        <section className={styles.section}>
          <div className={styles.title}>
            <p>Javascript</p>
          </div>
            <div className={styles.feed}>
                {/* {jsArticles.map((item, index) => (
                  <div key={index} className={styles.article}>
                    <div className={styles.article}>
                    <img onClick={() => window.location.href=item.url} src={item.urlToImage} alt={item.title}/>
                    <div className={styles.articleDetails}>
                        <h4>{item.title}</h4>
                        <p>{item.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                ))} */}
            </div>
            </section>
            <section className={styles.section}>
            <div className={styles.title}>
              <p>Programming</p>
            </div>
              <div className={styles.feed}>
                {/* {progArticles.map((item, index) => (
                  <div key={index} className={styles.article}>
                    <div className={styles.article}>
                    <img onClick={() => window.location.href=item.url} src={item.urlToImage} alt={item.title}/>
                    <div className={styles.articleDetails}>
                        <h4>{item.title}</h4>
                        <p>{item.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                ))} */}
            </div>
            </section>
            <section className={styles.section}>
            <div className={styles.title}>
              <p>Etherium</p>
              </div>
              <div className={styles.feed}>
                {/* {etherArticles.map((item, index) => (
                  <div key={index} className={styles.article}>
                    <div className={styles.article}>
                    <img onClick={() => window.location.href=item.url} src={item.urlToImage} alt={item.title}/>
                    <div className={styles.articleDetails}>
                        <h4>{item.title}</h4>
                        <p>{item.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                ))} */}
            </div>
            </section>
            <section className={styles.section}>
            <div className={styles.title}>
              <p>Next Js</p>
            </div>
              <div className={styles.feed}>
                {/* {nextjsArticles.map((item, index) => (
                  <div key={index} className={styles.article}>
                    <div className={styles.article}>
                    <img onClick={() => window.location.href=item.url} src={item.urlToImage} alt={item.title}/>
                    <div className={styles.articleDetails}>
                        <h4>{item.title}</h4>
                        <p>{item.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                ))} */}
            </div>
            </section>
            <section className={styles.section}>
            <div className={styles.title}>
              <p>Blockchain</p>
            </div>
              <div className={styles.feed}>
                {/* {blockArticles.map((item, index) => (
                  <div key={index} className={styles.article}>
                    <div className={styles.article}>
                    <img onClick={() => window.location.href=item.url} src={item.urlToImage} alt={item.title}/>
                    <div className={styles.articleDetails}>
                        <h4>{item.title}</h4>
                        <p>{item.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                ))} */}
            </div>
            </section>
        </div>
    </main>

      <footer className='footer'>
        <p>All Rights Reserved NextNewsZZ</p>
      </footer>
    </div>
  )
}



// export const getServerSideProps = async pageContext => {

//   const [jsRes, progRes, etherRes, nextRes, blockRes] = await Promise.all([
//     fetch(
//       `https://newsapi.org/v2/everything?q=javascript&language=en&pageSize=6`,
//       {
//         headers: {
//             Authorization: `${process.env.NEWS_KEY}`
//         },
//       }
//     ),
//     fetch(
//       `https://newsapi.org/v2/everything?q=programming&language=en&pageSize=6`,
//       {
//         headers: {
//             Authorization: `${process.env.NEWS_KEY}`
//         },
//       }
//     ),
//     fetch(
//       `https://newsapi.org/v2/everything?q=etherium&language=en&pageSize=6`,
//       {
//         headers: {
//             Authorization: `${process.env.NEWS_KEY}`
//         },
//       }
//     ),
//     fetch(
//       `https://newsapi.org/v2/everything?q=nextjs&language=en&pageSize=6`,
//       {
//         headers: {
//             Authorization: `${process.env.NEWS_KEY}`
//         },
//       }
//     ),
//     fetch(
//       `https://newsapi.org/v2/everything?q=blockchain&language=en&pageSize=6`,
//       {
//         headers: {
//             Authorization: `${process.env.NEWS_KEY}`
//         },
//       }
//     ),
//   ])
//   const [js, prog, ether, nextjs, block] = await Promise.all([
//     jsRes.json(),
//     progRes.json(),
//     etherRes.json(),
//     nextRes.json(),
//     blockRes.json()
//   ]);
  
//   return{
//     props: {
//       js,
//       prog,
//       ether,
//       nextjs,
//       block
//     }
//   }
// }
