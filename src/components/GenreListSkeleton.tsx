import { ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <ListItem paddingY={1}>
      <Skeleton height="10px" />
      <SkeletonText />
    </ListItem>
  );
}

export default GenreListSkeleton;
