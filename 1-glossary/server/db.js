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

let Save = (glossary) => {
  return new Promise((resolve, reject) => {
    Glossary.findOne({word: glossary.word})
      .then((result) => {
        if (!result) {
          const newWord = new Glossary ({
            word: glossary.word.toLowerCase(),
            definition: glossary.definition.toLowerCase()
          })
          resolve(newWord.save());
        } else {

        }
      })
      .catch((err) => {
        reject(err);
      })
  })
}

// 3. Export the models
module.exports.Glossary = Glossary;
module.exports.Save = Save;
// 4. Import the models into any modules that need them

////

const seeding = [{
  word: 'laptop',
  definition: 'a small computer you can use on your lap'
},
{
  word: 'desktop',
  definition: 'a large computer you can use on a desk'
},
{
  word: 'keyboard',
  definition: 'the buttons on a computer with letters and numbers'
}]

seeding.forEach((seed) => {
  Save(seed);
})