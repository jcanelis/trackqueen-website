const Functions = require("firebase-functions")
const cors = require("cors")({
  origin: ["https://trackqueen.app"],
})

const Sender = require("../other/sendemail")

exports.sendEmail = Functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const task = await Sender.Sender()
      res.status(200).send("Email sent.")

      return task
    } catch (error) {
      console.error(error)
      res.status(400).send("Error occured!")

      return error
    }
  })
})
