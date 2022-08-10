import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const MOVIES = [
  {
      title: "the Matrix -- fra server",
      plot: "a computer haker learns from mysterious rebels about the...",
      year: 1999
  },
  {
      title: "The Color Purple",
      plot: "A black souther woman struggles to find her identity after years of suffering",
      year: 1985
  }
];



app.get("/api/movies", (req, res) =>{
res.json(MOVIES)
});

app.post("/api/movies", (req, res) => {
  const {title, year, plot} = req.body;
  MOVIES.push({title,year,plot});
  res.sendStatus(200);
})

app.use(express.static(path.resolve("..", "client","dist")));
app.use((req,res) => {
  res.sendFile(path.resolve("..","client","dist","index.html"))
})

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("listening on http://localhost:" + server.address().port);
});