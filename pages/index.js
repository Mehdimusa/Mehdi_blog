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
        <p className={utilStyles.introduction}>Full-Stack Developer</p>
        <p>
          I am a Full Stack Developer specializing in Next.js and React.js, passionate about creating modern web experiences.
          With expertise in building responsive web applications, implementing AI-driven solutions, and optimizing application
          performance to deliver exceptional user experiences.
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
        <h2 className={utilStyles.headingLg}>Professional Experience</h2>
        <div className={utilStyles.experienceGrid}>
          <div className={utilStyles.experienceCard}>
            <h3>Full-Stack Developer</h3>
            <p className={utilStyles.company}>iLearning Solutions Pty Ltd | Adelaide</p>
            <p className={utilStyles.duration}>August 2025 - Present</p>
            <ul className={utilStyles.experienceList}>
              <li>Leading website modernization using Next.js</li>
              <li>Implementing MongoDB-based data structures</li>
              <li>Enhancing website performance and SEO</li>
            </ul>
          </div>

          <div className={utilStyles.experienceCard}>
            <h3>Full Stack Developer Intern</h3>
            <p className={utilStyles.company}>Auzbiz Consulting | Sydney</p>
            <p className={utilStyles.duration}>April 2025 - July 2025</p>
            <ul className={utilStyles.experienceList}>
              <li>Developed AI chatbots for customer interaction</li>
              <li>Built responsive websites with React.js and Next.js</li>
              <li>Implemented full-stack features and optimizations</li>
            </ul>
          </div>

          <div className={utilStyles.experienceCard}>
            <h3>Python Intern</h3>
            <p className={utilStyles.company}>Hindustan Times Labs | Mumbai</p>
            <p className={utilStyles.duration}>March 2023 - August 2023</p>
            <ul className={utilStyles.experienceList}>
              <li>Created load testing and automation scripts</li>
              <li>Supported development teams with testing</li>
              <li>Improved application performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Featured Projects</h2>
        <div className={utilStyles.projectGrid}>
          <div className={utilStyles.projectCard}>
            <h3>Personal Blog Platform</h3>
            <p>A modern blog built with Next.js featuring SSR, SSG, and dynamic routing.</p>
            <p className={utilStyles.techStack}>
              <strong>Tech:</strong> Next.js, React, CSS Modules, Markdown
            </p>
            <a href="https://github.com/Mehdimusa/Mehdi_blog" className={utilStyles.projectLink}>
              View Project →
            </a>
          </div>
          
          {/* Add more project cards here */}
        </div>
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
