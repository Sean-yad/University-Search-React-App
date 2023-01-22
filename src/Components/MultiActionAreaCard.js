import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { array1 } from "../Data/data";

export default function MultiActionAreaCard() {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        mx: "10px",
        margin: "0, auto",
      }}
    >
      {array1.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 700, mx: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
