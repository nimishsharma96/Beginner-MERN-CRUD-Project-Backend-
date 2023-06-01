const mongoose =require ("mongoose")

const DB = "mongodb+srv://sharmainfo96:xw0E3kow1ZSKkE8i@cluster0.18ljqeu.mongodb.net/CrudMernApp?retryWrites=true&w=majority"

mongoose.connect(DB , {
    useNewUrlParser:true,
    UseUnifiedTopology:true})
    .then(()=>console.log("connection success from mongodb"))
    .catch((err)=>console.log(err))

    