import mongoose from 'mongoose';

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/mongodbgApi', {
        useNewUrlParser: true
        });

        console.log('DB is connected');
    }catch{
        console.log("Error");
    }
}