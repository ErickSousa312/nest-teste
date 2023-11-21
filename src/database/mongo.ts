import { MongoClient } from 'mongodb';
import { ConfigService } from '@nestjs/config';

export async function FindDocuments(
  nameCollection: string,
  configService: ConfigService,
) {
  const MONGODB_URI = configService.get<string>('MONGODB_URI');
  console.log(MONGODB_URI);
  const a = new MongoClient(MONGODB_URI);
  const client = await a.connect();
  const db = client.db('db-nest');
  const collection = db.collection(nameCollection);
  // eslint-disable-next-line prettier/prettier
  const documents = await collection.findOne({}, { sort: { '_id' : -1 } });
  return documents;
}
