import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark, { stringify } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostData = {
    id: string;
    title: string;
    date: string;
    hero?:  string;
    heroAlt?: string;
    contentHtml?: string;
}

export function getSortedPostsData (): PostData[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(
        filename => {
            const id = filename.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const matterResult = matter(fileContents)

            return {
                id,
                ...(matterResult.data as {date: string, title: string, hero: string, heroAlt: string} )
            }
        }
    );

    return allPostsData.sort(
        ({date: a}, {date: b}) => {
            if (a < b ) {
                return 1
            } else if ( a > b ) {
                return -1
            } else {
                return 0
            }
        }
    )
}

export function getAllPostIds() {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map(
        filename => {
            return {
                params: {
                    id: filename.replace(/\.md$/, '')
                }
            }
          }
    )
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as {date: string, title: string, hero: string, heroAlt: string} )
    };
}