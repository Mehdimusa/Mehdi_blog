import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Next.js & Flutter Specialist.
        
        </p>
        <p>
          I am a Full Stack Developer with a focus on Next.js for web
          applications and Flutter for mobile and cross-platform solutions. This
          is a Single web page application - we will be building a site like
          this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>

        


      </section>
      {/* Work Experience Section */}
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Work Experience</h2>
        <ul>
          <li>
            <strong>Full Stack Developer</strong> at Ausbiz consulting (April 2025 - july 2025)<br />
            Developed web applications using Next.js and mobile apps with Flutter.
          </li>
          <li>
            <strong>Python and Nextjs intern </strong> at HT labs(Hindustan Times <Link href="https://www.ottplay.com/">link</Link>) (2023 March  - 2023 September)<br />
            <ul>
              <li>Developed and executed load testing scripts to assess web application performance and ensure scalability under high traffic.</li>
              <li>Contributed to scripting and optimizing dynamic web pages using React.js and Next.js, enhancing user experience and front-end efficiency.</li>
            </ul>

          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
