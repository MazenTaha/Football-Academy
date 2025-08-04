import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        const query = `INSERT INTO registrations (
    player_full_name, dob, age, gender, nationality, school_name, grade,
    parent_name, relation, parent_phone, parent_email, emergency_phone,
    has_allergies, allergy_details, taking_meds, doctor_info,
    training_days, program_type, position, signature, subscription_plan
) VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,
    $12, $13, $14, $15, $16, $17, $18, $19, $20, $21
) RETURNING *`

        const values = [
            data.player_full_name, data.dob, data.age, data.gender, data.nationality, data.school_name, data.grade,
            data.parent_name, data.relation, data.parent_phone, data.parent_email, data.emergency_phone,
            data.has_allergies, data.allergy_details, data.taking_meds, data.doctor_info,
            data.training_days, data.program_type, data.position, data.signature, data.subscription_plan
        ]

        const result = await pool.query(query, values)

        return NextResponse.json({
            success: true,
            message: 'Registration successful',
            player: result.rows[0]
        })

    } catch (err) {
        console.error('Error inserting data:', err)
        return NextResponse.json(
            {
                success: false,
                message: 'Internal Server Error',
                error: err instanceof Error ? err.message : 'Unknown error'
            },
            { status: 500 }
        )
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Registration endpoint' })
} 