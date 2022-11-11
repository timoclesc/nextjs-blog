export type PostHeaderProps = {
  title: string;
  coverImage?: string;
  date: string;
  author: string;
  categories?: string;
}


export default function PostHeader({title, date, author} : PostHeaderProps) {
  return (
    <>
     {title}
    </>
  )
}
