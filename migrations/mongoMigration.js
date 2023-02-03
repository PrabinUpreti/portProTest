import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  "mongodb+srv://admin:0330120x@firstcluster.mygjj.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  db.db.listCollections().toArray(function (err, collectionNames) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(collectionNames);
    db.close();
  });
  //   console.log("Connected successfully");
});

// app.post("/add_user", async (request, response) => {
//   const user = new userModel(request.body);

//   try {
//     await user.save();
//     response.send(user);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
