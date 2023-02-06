import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { News } from "../../types/cards";
import { CardActionArea, CardMedia } from "@mui/material";

const NewsCard = ({ news }: { news: News }) => {
  const { title, author, imageUrl, id, date, content, url } = news;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link href={url} underline="none">
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
