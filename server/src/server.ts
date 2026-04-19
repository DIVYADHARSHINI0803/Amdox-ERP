// Main entry point for the Express server, responsible for starting the server and listening on a specified port
import app from "./app";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});