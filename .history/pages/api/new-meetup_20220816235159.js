// api/new-meetup
import { MongoClient } from 'mongodb';
async function handler(req, res) { 
    if (req.method === 'POST') { 
        const data = req.body;
        const { title, image, address, description } = data;
    }

   const client=await MongoClient.connect('mongodb+srv://......')
    const db = client.db();
    const meetupCollection = db.meetupCollection('meetups');
   const result= await meetupCollection.insertOne({
        data
   });
    console.log(result);
    client.close();

}
export default handler;