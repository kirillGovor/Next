import * as React from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { News } from "@/types/cards";

const SkeletonNews = ({ news }: { news: News }) => {
  const { title, content } = news;

  return (
    <Card sx={{ maxWidth: 345, height: "100%" }}>
      <CardActionArea>
        <Skeleton variant="rectangular" sx={{ maxWidth: 345 }}>
          <div style={{ paddingTop: "57%" }} />
        </Skeleton>
        <CardContent>
          <Skeleton>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Skeleton>
          <Skeleton>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </Skeleton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SkeletonNews;
