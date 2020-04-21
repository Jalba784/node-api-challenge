/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/
const express = require("express");
const server = express();
const PORT = 7000;
server.use(express.json());

// Importing Sub-Routes
const projectsRoutes = require("./routes/projectsRoutes");
const actionsRoutes = require("./routes/actionsRoutes");

// Root
server.use("/", (req, res) => {
    res.status(200).send("Root of API is running...")
});

// Using Sub-Routes
server.use("/projects", projectsRoutes);
server.use("/actions", actionsRoutes);

// Global Not Found
server.use((req, res) => {
   res.status(404).send("Sorry...Data not found!")
});


server.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`)
});