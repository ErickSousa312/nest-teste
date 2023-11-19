import { MongoClient } from 'mongodb';

export async function FindDocuments(nameCollection: string) {
  console.log(nameCollection);
  const a = new MongoClient('mongodb://192.168.100.133:27018/db-nest');
  const client = await a.connect();
  const db = client.db('db-nest');
  const collection = db.collection(nameCollection);
  // eslint-disable-next-line prettier/prettier
  const documents = await collection.findOne({}, { sort: { '_id' : -1 } });
  console.log(documents);

  return a;
}