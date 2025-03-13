import { MongoClient } from "mongodb";

const URI = "mongodb+srv://luisbarauna25:SpotifyUserPassword@cluster0.zzh2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyReplica");


