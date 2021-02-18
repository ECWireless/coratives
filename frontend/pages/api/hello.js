const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, phone, title, company } = req.body

  const confirmationEmail = {
    to: email,
    from: 'Elliott@valtechcreative.com',
    subject: `Submission was successful!`,
    html: `
      <p>Thank you for contacting us! We will be in touch shortly.</p>
      <br/>
      <h3>Your submission:</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Phone: ${title}</p>
      <p>Company: ${company}</p>
    `
  }

  const notificationEmail = {
    to: 'Elliott@valtechcreative.com',
    from: 'Elliott@valtechcreative.com',
    subject: `New Contact Form Submission - ${email}`,
    html: `
      <p>New contact form submission from ${name}.</p>
      <br/>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Phone: ${title}</p>
      <p>Company: ${company}</p>
    `
  }

  try {
    await sgMail.send(confirmationEmail)
    await sgMail.send(notificationEmail)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
