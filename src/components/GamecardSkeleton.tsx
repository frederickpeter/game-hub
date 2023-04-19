import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";


function GamecardSkeleton() {
  return (
    <Card borderRadius={10} overflow='hidden' width="250px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GamecardSkeleton