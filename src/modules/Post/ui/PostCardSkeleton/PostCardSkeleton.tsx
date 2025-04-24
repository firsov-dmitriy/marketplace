import { Skeleton } from "@mui/material";

export const PostCardSkeleton = () => {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <Skeleton animation="wave" variant="rectangular" height={250} />
      <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={210}
        height={60}
      />
    </div>
  );
};
