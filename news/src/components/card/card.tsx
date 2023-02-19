import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { News } from "../../types/cards";
import { CardActionArea, CardMedia } from "@mui/material";

const NewsCard = ({ news }: { news: News }) => {
  const { title, imageUrl, content, url } = news;

  const styles = {
    cardsStyles: { maxWidth: 345, height: "100%" },
  };

  return (
    <Card sx={styles.cardsStyles}>
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
