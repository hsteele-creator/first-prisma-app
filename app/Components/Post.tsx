import DeletePostButton from "./DeletePostButton"

type PostProps = {
    id: string,
    title: string,
    content: string | null,
    authorName: string | null | undefined
}

export default function Post({ id, title, content, authorName } : PostProps) {
    return <div className="border-2 p-4">
        <h1>{title}</h1>
        <p>{content}</p>
        <p>{authorName}</p>
        <DeletePostButton id={id} />
    </div>
}