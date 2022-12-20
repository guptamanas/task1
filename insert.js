const {MongoClient} = require('mongodb');
const url= 'mongodb://127.0.0.1:27017';
const database='cricket'
const client=new MongoClient(url);

async function getData()
{
    let result=await client.connect();
    let db= result.db("cricket");
    return db.collection('mycollection');
   // let response= await collection.find({}).toArray();
   // console.log(response);
}

const insert=async()=>{
    const db=await getData();
    const result =db.insertMany([
        {first_name:'chintu',last_name:'singh',age:23},
        {first_name:'mintu',last_name:'gupta',age:13 },
        {first_name:'sintu',last_name:'pal',age:33}
]);
    if((await result).acknowledged==true)
    console.log("succesfully inserted")
}
insert();