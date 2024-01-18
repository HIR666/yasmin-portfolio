import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MediaCard({ name, caption, img }) {
  return (
    <Card>
      {/* <CardActionArea> */}
      <CardMedia component="img" height="300" image={img} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name || null}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {caption || null}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
