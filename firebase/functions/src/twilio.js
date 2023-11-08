const Functions = require("firebase-functions")
const cors = require("cors")({
  origin: ["https://trackqueen.app"],
})

const accountsid = Functions.config().twilio.accountsid
const authtoken = Functions.config().twilio.authtoken
const Twilio = require("twilio")(accountsid, authtoken)

exports.sendText = Functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const body = JSON.parse(req.body)
    const { url } = Functions.config().trackqueen
    try {
      const message = Twilio.messages.create({
        body: `Install the TrackQueen beta: ${url}`,
        from: Functions.config().twilio.from,
        to: body,
      })
      Functions.logger.log("Message data : ", message)
      res.status(200).send("Text sent!")
    } catch (error) {
      res.status(400).send("Error has occured!")
      console.log(error)
    }
  })
})
