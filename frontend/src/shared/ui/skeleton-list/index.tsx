import { Skeleton, type SxProps, type Theme } from "@mui/material";
import React, { useMemo } from "react";

interface SkeletonListProps {
  count?: number;
  height?: number;
  sx?: SxProps<Theme> | undefined;
}

function SkeletonList({ count = 1, height = 140 }: SkeletonListProps) {
  const list = useMemo(() => {
    return new Array(count)
      .fill("skeleton-item")
      .map((_, index) => (
        <Skeleton
          key={`skeleton-item-${index}`}
          sx={{ height, borderRadius: 2, width: "100%" }}
          variant="rectangular"
        />
      ));
  }, [count]);

  return <>{list}</>;
}

export default SkeletonList;
