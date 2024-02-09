"use client";
import { useRouter } from "next/navigation";

type DeletePostButtonProps = {
  id: string;
};

export default function DeletePostButton({ id }: DeletePostButtonProps) {
  const router = useRouter();
  async function handleDelete() {
    try {
      await fetch(`/api/post/${id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return <button onClick={handleDelete}>Delete Post</button>;
}
