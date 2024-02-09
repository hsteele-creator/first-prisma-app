import prisma from "@/lib/prisma";
import Post from "./Components/Post";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    // where: { published: false },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/add-post"}>Add Post</Link>
      {posts.map((p) => {
        return (
          <Post
            key={p.id}
            id={p.id}
            title={p.title}
            content={p.content}
            authorName={p.author?.name}
          />
        );
      })}
    </main>
  );
}
