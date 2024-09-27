
export function connectToDatabase() {
    // to connect to database
    mongoose.connect(process.env.MONGO_DB_URI)
    mongoose.connection.on('connected', () => {
        console.log("Connected to mongo db server")
    })
    mongoose.connection.on('error', (err) => {
        console.log("Error while connecting to the server ", err)
    })
}