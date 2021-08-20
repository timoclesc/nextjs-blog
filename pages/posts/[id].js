import Head from 'next/head';
import Image from 'next/image';
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from '../../components/utils.module.scss';
import { parseISO, format } from 'date-fns';
import Date from '../../components/atoms/date';


export default function Post ({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.title} | timocles.com</title>
        </Head>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <Date classes={`${utilStyles.lightText} ${utilStyles.marginBottomX2} ${utilStyles.block}`} dateString={postData.date} />
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

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}