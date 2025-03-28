import { Header } from "../../modules";
import { Box } from "@mui/material";
import { usePostsControllerFindAll } from "../../gen";

export const Posts = () => {
  const { data: posts } = usePostsControllerFindAll();

  return (
    <div>
      <Header />
      <Box>{posts?.data.map((post) => <div>{post.id}</div>)}</Box>
    </div>
  );
};
