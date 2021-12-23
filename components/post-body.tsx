
export default function PostBody({ content, className } : { content: string, className: string }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
