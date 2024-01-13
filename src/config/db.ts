import mongoose, { ConnectOptions } from "mongoose";

mongoose.set("strictQuery", false);

const connectDatabase = () => {

const MONGODB_URI:string = "mongodb+srv://ashcoder666:React8281@cluster0.prpszsh.mongodb.net/nodepay"
  try {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined.");
    }
    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
    } as ConnectOptions);

    mongoose.connection.on("error", (error: string) => {
      console.log("Connect to database failed with error:", error);
      throw new Error(error);
    });

    mongoose.connection.on("open", () => {
      console.log("Connect to database successfully");
    });
  } catch (error: any) {
    console.log("Connect to database failed with error:", error);
    throw new Error(error);
  }
};

export default connectDatabase;