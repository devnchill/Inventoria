import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/categories", () => console.log("display categories"));
app.get("/categories/:catId", () =>
  console.log("display items from that categories"),
);

app.get("/categories/:catId/:musicId", () => "display music item clicked ");
app.delete(
  "/categories/:catId/:uid",
  () => "if user is admin then delete selected category",
);
app.delete(
  "/musicitem/:musicid/:uid",
  () => "if user is admin then delete selected music item",
);
