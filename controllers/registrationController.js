const db = require('../config/db');
const nodemailer = require('nodemailer');

exports.getForm = (req, res) => {
  res.render('register');
};

exports.submitForm = async (req, res) => {
  const {
    player_full_name, dob, age, gender, nationality, school, grade,
    parentName, relationship, mobile, email, emergency,
    allergies, medication, doctorContact,
    days, type, position,
    consent, subscription
  } = req.body;

  try {
    await db.query(
      `INSERT INTO registrations 
        (player_full_name, dob, age, gender, nationality, school, grade,
         parent_name, relationship, mobile, email, emergency,
         allergies, medication, doctor_contact,
         days, program_type, position, consent, subscription)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,
               $13,$14,$15,$16,$17,$18,$19,$20)`,
      [player_full_name, dob, age, gender, nationality, school, grade,
        parentName, relationship, mobile, email, emergency,
        allergies, medication, doctorContact,
        days, type, position, consent, subscription]
    );

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Evaluation Session - Strive Academy',
      html: `<p>Dear ${parentName},</p>
             <p>Your child <b>${playerName}</b> is scheduled for a free evaluation session at <b>German University in Cairo, New Cairo</b>. We will contact you shortly with a specific date.</p>`
    });

    res.render('success', { name: player_full_name });

  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong.');
  }
};
