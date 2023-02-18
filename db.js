const mongoose=require('mongoose')
const bd='mongodb+srv://vikas:vikas79@cluster0.eobugei.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(bd,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
console.log('connection successful');
}).catch((err)=>{
console.log("connection failed due to"+err);
})
