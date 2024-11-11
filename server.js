import config from './config/config.js'
import app from './server/express.js'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
    //useNewUrlParser: true,
    //useCreateIndex: true, 
    //useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the database!");
    })

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Suin Portfolio."});
});

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})


// app.post("/api/qualifications", (req, res) => {
//     // Update the existing qualification object with the data received in the request body
//     console.log(">>>>")
//     console.log(req)


//     res.status(200).json({ message: "Qualification updated successfully!", updatedData: qualification });
// });



