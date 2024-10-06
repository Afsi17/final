var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://afsinhassn:afsinhassn@cluster0.nlw7w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(
    
        () => {
            console.log("db connection established")
        
        })

    .catch(
        err => {
            console.log('connection error')
        })