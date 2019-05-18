require("./models/User")
require("./models/Post")
const express = require("express")
const app = express()
const config = require("./config")()
const mongoose = require("mongoose")
const User = mongoose.model("user")
const Post = mongoose.model("post")
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')
const bodyParser = require('body-parser')

console.log("here ");
mongoose.connect(config.uri)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err))


// app.use(bodyParser.urlencoded({
//   extended: true
// }))
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

const router = express.Router()
new Post({title: "Here", body: "there", author: "5cdf9439575d8266f74fa6e0"}).save()
const newUser = router.post("/new", (req, res) => {
  console.log(User);
  User.findOne({ email: req.body.email })
  .then(user => {
    if(user) {
      return res.status(400).json({ email: "Already in User"})
    } else {
      console.log(req.body);
      const theNewUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      theNewUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err))
    }
  })
})

app.use('/users', newUser)

app.listen(5000, () => console.log("Server is running on port: 5000"))
