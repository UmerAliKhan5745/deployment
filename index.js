const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message:
      "Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.Ensure that your application inside the container is configured to listen on all interfaces (0.0.0.0) rather than just localhost (127.0.0.1). If it listens only on localhost, it won't be accessible from outside the container.",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
