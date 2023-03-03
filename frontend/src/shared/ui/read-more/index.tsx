import { Typography } from "@mui/material";
import { type TypographyProps } from "@mui/system";
import React, { useState } from "react";

interface ReadMore extends TypographyProps {
  maxLength?: number;
  children: string;
}

export const ReadMore = ({ maxLength = 150, children, ...props }: ReadMore) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (children.length >= 150) {
    return (
      <>
        {isReadMore ? children.slice(0, 150) : children}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </>
    );
  }

  return (
    <>
      {children.length >= maxLength ? (
        <>
          <>{children.slice(0, 150)}</>
          <Typography display="inline">read more...</Typography>
        </>
      ) : (
        children
      )}
    </>
  );
};
