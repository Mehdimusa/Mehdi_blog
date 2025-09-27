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
        <p className={utilStyles.introduction}>
          Full-Stack Developer & Web Specialist
        </p>
        <p>
          A passionate Full Stack Developer specializing in Next.js and
          React.js, focused on crafting modern web experiences. Expert in
          building responsive applications, implementing AI-driven solutions,
          and optimizing performance. Dedicated to creating exceptional user
          experiences through clean, efficient, and scalable code architecture.
        </p>
      </section>

      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Work Experience</h2>
        <div className={utilStyles.experienceList}>
          <div className={utilStyles.experienceItem}>
            <h3 className={utilStyles.experienceTitle}>
              Full-Stack Developer
              <span className={utilStyles.company}>
                {" "}
                | iLearning Solutions Pty Ltd | Adelaide, Australia
              </span>
            </h3>
            <p className={utilStyles.duration}>August 2025 - Present</p>
            <ul>
              <li>
                Contributing to the digital transformation of the company
                website, modernizing it from legacy version to
                ilearningsolutions.com
              </li>
              <li>
                Developing scalable, responsive front-end features using
                React.js and Next.js to improve performance and user experience
              </li>
              <li>
                Implementing MongoDB-based data structures for efficient content
                management and dynamic rendering
              </li>
              <li>
                Collaborating with cross-functional teams to ensure smooth
                migration to new technology stack
              </li>
              <li>
                Enhancing website accessibility, SEO, and load performance to
                increase visibility and customer engagement
              </li>
              <li>Tech: Next.js, React, CSS Modules, MongoDB</li>
            </ul>
          </div>

          <div className={utilStyles.experienceItem}>
            <h3 className={utilStyles.experienceTitle}>
              Full Stack Developer
              <span className={utilStyles.company}>
                {" "}
                | Auzbiz Consulting | Sydney, Australia
              </span>
            </h3>
            <p className={utilStyles.duration}>April 2025 - July 2025</p>
            <ul>
              <li>
                Developed web applications using Next.js and mobile apps with
                Flutter
              </li>
              <li>Implemented AI-based chatbots for customer interaction</li>
              <li>Created responsive and dynamic web interfaces</li>
              <li>Tech: Next.js, React, Prisma, MongoDB</li>
              <a
                href="https://www.ausbizconsultingservices.com.au/"
                className={utilStyles.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ausbiz Consulting Website →
              </a>
            </ul>
          </div>

          <div className={utilStyles.experienceItem}>
            <h3 className={utilStyles.experienceTitle}>
              Python and Next.js Intern
              <span className={utilStyles.company}>
                {" "}
                | HT Labs (Hindustan Times) | Mumbai, India
              </span>
            </h3>
            <p className={utilStyles.duration}>March 2023 - September 2023</p>
            <ul>
              <li>
                Developed and executed load testing scripts to assess web
                application performance and ensure scalability under high
                traffic
              </li>
              <li>
                Contributed to scripting and optimizing dynamic web pages using
                React.js and Next.js
              </li>
              <li>
                Enhanced user experience and front-end efficiency through modern
                development practices
              </li>
              <li>Tech: Next.js, React, Python, MongoDB, Docker</li>
              <a
                href="https://www.ottplay.com"
                className={utilStyles.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hindustan Times Website →
              </a>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Featured Projects</h2>
        <div className={utilStyles.projectGrid}>
          <div className={utilStyles.projectCard}>
            <h3>Personal Blog Platform</h3>
            <p>
              A modern blog built with Next.js featuring SSR, SSG, and dynamic
              routing.
            </p>
            <p className={utilStyles.techStack}>
              <strong>Tech:</strong> Next.js, React, CSS Modules, Markdown
            </p>
            <a
              href="https://github.com/Mehdimusa/Mehdi_blog"
              className={utilStyles.projectLink}
            >
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
