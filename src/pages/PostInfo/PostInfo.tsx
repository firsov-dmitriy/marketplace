import { PostCard } from "@/modules/Post/ui/PostCard";
import { useParams } from "react-router";
import { usePostsControllerFindOne } from "@/gen";
import { Header } from "@/modules";

export const PostInfoPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post } = usePostsControllerFindOne(id || "");

  return (
    <>
      <Header />
      <div className="container mx-auto">
        {post?.data && <PostCard key={post?.data.id} post={post?.data} />}
      </div>
    </>
  );
};
