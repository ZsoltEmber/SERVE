//The first line imports the express module
//The second line creates an instance of the express application and assigns it to a constant variable app.
import express from "express";
const app = express();


//Then, we define a route for the application using the app.get() method.
//The route is for the root URL ('/'). When the user navigates to this URL in their web browser,
//the callback function defined by (req, res) => { } is executed.

//This function takes two arguments: req (short for "request") and res (short for "response").
//The req object represents the HTTP request sent by the user's browser,
//and the res object represents the response that will be sent back to the browser.
// app.get("/", (req, res) => {
//     res.send("Ciao");
// });


//nothing happens   ???
// app.get('/another-path', (req, res) => {
//     res.send('Ciao on another path');
// });


app.get("/", (req, res) => {

    const q = req.query;

    console.log(q);

    res.send(`Ciao, ${q.name}!`);
})

app.listen(3000, () => {
    console.log("Open this link in your browser: http://127.0.0.1:3000");
});

app.get("/users/:userId", (req, res) => {
    res.send(`the user id is: ${req.params.userId}`);
    console.log(req.params);
});

app.get("/math/:op", (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);

    const { op } = req.params;

    const result = op === "add" ? x + y : op === "subtract" ? x - y : op === "multiply" ? x * y : op === "divide" ? x / y : false;
    const resultObject = {
        numbers : {
            x:x,
            y:y
        },
        operation : op,
        result : result? result : "unrecognizable operation name"
    }
    res.send(resultObject)
});
