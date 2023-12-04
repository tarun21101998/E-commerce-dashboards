const mongoose= require('mongoose');


const result = async()=>{
    let data = await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
    if(data){
        console.log("successfully connected")
    }
}
result()