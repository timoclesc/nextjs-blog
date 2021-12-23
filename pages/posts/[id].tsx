import Head from 'next/head';
import Image from 'next/image';
import Layout from "components/layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import utilStyles from '../../components/utils.module.scss';
import Date from '../../components/atoms/date';
import { GetStaticPaths, GetStaticProps } from 'next';


export default function Post ({postData} : { postData: PostData }) {
    return <Layout home={false}>
        <Head>
            <title>{postData.title} | timocles.com</title>
        </Head>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <Date additionalClasses={`${utilStyles.lightText} ${utilStyles.marginBottomX2} ${utilStyles.block}`} dateString={postData.date} />
        <div className={ utilStyles.heroImageContainer }>
            <Image
                src={`/images/${postData.hero}`}
                className={utilStyles.heroImage}
                layout="fill"
                alt={postData.heroAlt}
            />
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
    </Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps =  async ({ params }) => {
    const postData = await getPostData(params.id as string);

    return {
        props: {
            postData
        }
    }
}