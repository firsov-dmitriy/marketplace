import { Header } from "@/modules";
import { Box } from "@mui/material";
import { usePostsControllerFindAll } from "@/gen";
import { PostCard } from "@/modules/Post/ui/PostCard";
import { PostCardSkeleton } from "@/modules/Post/ui/PostCardSkeleton";

export const Posts = () => {
  const { data: posts, isLoading } = usePostsControllerFindAll();
  const skeletonArray = new Array(9).fill(0).map((_, i) => i);
  return (
    <div>
      <Header />
      <Box className="mt-4 grid gap-4 grid-cols-3 container mx-auto">
        {isLoading &&
          skeletonArray.map((_, index) => <PostCardSkeleton key={index} />)}
        {posts?.data.map((post) => <PostCard key={post.id} post={post} />)}
      </Box>
    </div>
  );
};
