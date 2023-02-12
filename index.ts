import dotenv from "dotenv";
import http from "http";
import app from "./app";
import dbConnection from "./config/dbConnection";

dotenv.config();
http.createServer(app);

// database connection
dbConnection();

// application port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is listen on http://localhost:${port}`);
});
