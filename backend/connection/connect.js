const mongoose = require('mongoose');
// const db_url = process.env.DATABASE_URI;
const db_url = "mongodb+srv://vkchauhangoldy:vkchauhangoldy@realestate.n3kd9bc.mongodb.net/Real-Estate?retryWrites=true&w=majority";


mongoose.set('strictQuery', false);

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database successfully !');
}).catch(() => {
    console.log('Failed to connect');
});
