import mongoose from 'mongoose'


const connect = (schema) =>{
  const uri = process.env.MONGODB_URI || ''
  const connection = mongoose.createConnection(uri);
  const Tank = connection.model('Tank',schema);
  return  { 
    connection,
    Tank
   }
}

export default connect