import Head from 'next/head';
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from '../../components/utils.module.scss';
import { parseISO, format } from 'date-fns';
import Date from '../../components/atoms/date';


export default function Post ({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <h2>{postData.id}</h2>
        <Date classes={utilStyles.lightText} dateString={postData.date} />
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