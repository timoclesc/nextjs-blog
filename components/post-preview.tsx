import NextLink from 'next/link'
import { Card, Text, Divider, Tag } from "@geist-ui/react";
import { Author } from "./author";
import Date from './atoms/date'

export type PostPreviewProps = { 
    title: string;
    featureImage?: string;
    author?: Author;
    slug: string;
    excerpt?: string
    date: string;
    terms: any;
}

export default function PostPreview ({title, featureImage, author, slug, excerpt, date, terms}: PostPreviewProps) {
    return (
        <NextLink href={`/posts/${slug}`}>
            <Card hoverable width="100%">
                <Card.Content>
                    <Text h2>{title}</Text>
                </Card.Content>
                <Divider/>
                <Card.Content>
                    {
                        terms.map(
                            ({node}) => {
                                return <Tag>{node.name}</Tag>
                            }
                        )
                    }
                    <Date dateString={date} />
                    <Text></Text>
                </Card.Content>
            </Card>
        </NextLink>
    );
}