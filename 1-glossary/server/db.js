require("dotenv").config();
const mongoose = require("mongoose");
// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');
// 2. Set up any schema and models needed by the app
let glossarySchema = mongoose.Schema({
  word: String,
  definition: String
})
let Glossary = mongoose.model('Glossary', glossarySchema);

let Save = () => {

}
// 3. Export the models
module.exports.Glossary = Glossary;
module.exports.Save = Save;
// 4. Import the models into any modules that need them
