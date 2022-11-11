import Head from 'next/head'
import NextLink from 'next/link'
import { GetStaticProps} from 'next'
import Date from '../components/atoms/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../components/utils.module.scss'
import { getSortedPostsData, PostData } from '../lib/posts'
import { Text, Link } from '@geist-ui/react'
import { getAllPostsForHome, getAllDrills } from '../lib/api';
import CardList from '../components/card-list'
import PostPreview from '../components/post-preview'
import { Grid } from '@geist-ui/react';

export default function Home({allPostsData, allWPPosts, allExercises} : {
  allPostsData: PostData[],
  allWPPosts: any,
  allExercises: any
}) {
  // const exercises = allExercises.edges;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Text p>Hello there</Text>
        <Text p>I'm Timocles, a Front-end Developer from Melbourne, Australia.</Text>
        {/* <Text p>There isn't much here but have a look around and enjoy what there is. </Text> */}
      </section>
      {/* <section>
        <Text h2>Posts</Text>
        {JSON.stringify(exercises )}
        <CardList>
          {
              exercises.map(
                ({node}) => (
                  <Grid xs={24} sm={12} key={node.slug}>
                    <PostPreview title={node.title} slug={node.slug} date={node.date} terms={node.terms?.edges}/> 
                  </Grid>
                )
              )
            }
        </CardList>
        <ul className={utilStyles.list}>
          
        </ul>
      </section> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const allPostsData = getSortedPostsData();
  // const allWPPosts = await getAllPostsForHome(false);
  // const allExercises = await getAllDrills();
  return {
    props: {
      // allPostsData,
      // allWPPosts,
      // allExercises
    }
  } 
}
