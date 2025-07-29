const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL connection setup
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_efkx30VCtFJh@ep-proud-star-aec4upap-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    ssl: {
        rejectUnauthorized: false,
    }
});

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    try {
        const data = req.body;

        const query = `INSERT INTO registrations (
      player_full_name, dob, age, gender, nationality, school_name, grade,
      parent_name, relation, parent_phone, parent_email, emergency_phone,
      has_allergies, allergy_details, taking_meds, med_details, doctor_info,
      training_days, program_type, position, consent_given, signature, subscription_plan
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,
      $15, $16, $17, $18, $19, $20, $21, $22, $23
    ) RETURNING *`;

        const values = [
            data.player_full_name, data.dob, data.age, data.gender, data.nationality, data.school_name, data.grade,
            data.parent_name, data.relation, data.parent_phone, data.parent_email, data.emergency_phone,
            data.has_allergies, data.allergy_details, data.taking_meds, data.med_details, data.doctor_info,
            data.training_days, data.program_type, data.position, data.consent_given, data.signature, data.subscription_plan
        ];

        const result = await pool.query(query, values);

        // Pass player name to success page
        res.render('success', { player: result.rows[0] });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
