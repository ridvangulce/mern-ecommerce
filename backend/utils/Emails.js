const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.sendMail = async (receiverEmail, subject, body) => {
  const mailOptions = {
    from: process.env.EMAIL,  // Gönderen email adresi (.env dosyasından alınır)
    to: receiverEmail,        // Alıcı email adresi
    subject: subject,         // Email başlığı
    html: body                // Email içeriği (HTML formatında)
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.log('Error sending email:', error);
    throw error;
  }
};

