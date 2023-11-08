const Functions = require("firebase-functions")
const SendGrid = require("@sendgrid/mail")

SendGrid.setApiKey(Functions.config().sendgrid.key)

exports.Sender = async function () {
  try {
    const message = {
      to: Functions.config().sendgrid.to,
      from: Functions.config().sendgrid.from,
      subject: "TrackQueen Beta",
      text: "This is some text",
      html: "<strong>This is some HTML</strong>",
    }
    const email = await SendGrid.send(message)

    return email
  } catch (error) {
    console.error(error)

    return error
  }
}
