import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { array1 } from "../Data/data";
import "./UniversitySearch.css";

export default function MultiActionAreaCard() {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        textDecoration: "none",
        target: "_blank",
      }}
    >
      <div className="Header-Div">
       
        <h1>Top 10 Universities Global</h1>{" "}
      </div>
      {array1.map((item) => (
        <Card
          sx={{
            maxWidth: 1000,
            mx: "10px",
            margin: "20px auto",
            boxShadow: "10px 10px 10px #ccc",
            textDecoration: "none",
            target: "_blank",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#46474a",
          }}
        >
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
        </Card>
      ))}
    </div>
  );
}

/*
1.Massachusetts Institute of Technology (MIT) 
2.University of Cambridge 
3.Stanford University 
4.University of Oxford 
5.Harvard University 
6.California Institute of Technology (Caltech) 
7.Imperial College London 
8.UCL (University College London) 
9.ETH Zurich (Swiss Federal Institute of Technology) 
10.University of Chicago 





*/
