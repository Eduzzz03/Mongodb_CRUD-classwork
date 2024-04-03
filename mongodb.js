const mongoose = require('mongoose');
let compass_url ='mongodb://localhost:27017/sampledb';
let mongodb_url =""

mongoose.connect(compass_url).then(()=>{
    console.log("db connected");
})

.catch((err) => {
    console.log(err);
});