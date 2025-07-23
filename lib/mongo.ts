import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not defined.");

const options = {
  tls: true,
  loggerLevel: "debug",
};

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

const client = new MongoClient(uri, options);
const clientPromise = global._mongoClientPromise || client.connect();
if (!global._mongoClientPromise) {
  global._mongoClientPromise = clientPromise;
}

export default clientPromise;
