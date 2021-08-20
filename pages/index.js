import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/atoms/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../components/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there</p>
        <p>
          I'm Tim, a FED that's learning Next.js
        </p>
        <p>
          <Link href="/posts/first-post">
            <a>Go to first post</a>
          </Link>
        </p>
      </section>
      <section>
        <h2 className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          Blog
        </h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(
              ({id, date, title}) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <h4 class={utilStyles.padTopx0}>{title}</h4>
                    </a>
                  </Link>
                  <Date classes={utilStyles.lightText} dateString={date} />
                </li>
              )
            )
          }
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  } 
}