import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Date from '../components/atoms/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../components/utils.module.scss'
import { getSortedPostsData, PostData } from '../lib/posts'

export default function Home({allPostsData} : {
  allPostsData: PostData[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there</p>
        <p>
          I'm Timocles, a FED from Melbourne, Australia. 
        </p>
        <p>
          There isn't much here but have a look around and enjoy what there is. 
        </p>
      </section>
      <section>
        <h2 className={`${utilStyles.headingMd} ${utilStyles.padTopX3}`}>
          Posts
        </h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(
              ({id, date, title}) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <h4 className={utilStyles.listTitle}>{title}</h4>
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

export const getStaticProps: GetStaticProps = async context => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  } 
}