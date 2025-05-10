import { IPostCardProps } from "./types.ts";
import { Typography } from "@mui/material";

export const PostCard = (props: IPostCardProps) => {
  const { post, onClick } = props;

  return (
    <div className="bg-gray-200 p-4 rounded" onClick={onClick}>
      <img alt={post.title} src={post.imageUrl} className="max-h-[250px]" />
      <Typography variant="h5" className="mt-2">
        {post.title}
      </Typography>
      <Typography variant="body2" className="mt-2">
        {post.text}
      </Typography>
    </div>
  );
};
