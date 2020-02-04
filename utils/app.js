const mongoURI = 'mongodb://localhost:27017/pettingill-industries'
const options = {
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    retryWrites: false
}


module.exports = { mongoURI, options }