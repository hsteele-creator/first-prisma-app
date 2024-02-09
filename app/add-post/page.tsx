"use client";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { push } = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContent(value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      push("/")
    } catch (e) {
      console.error(e);
    }
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1>Add Post</h1>
      <Link href={"/"}>View Posts</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" onChange={handleTitleChange} />
        <input
          type="text"
          placeholder="content"
          onChange={handleContentChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
