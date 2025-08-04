import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '10')
        const offset = (page - 1) * limit

        const query = `
            SELECT * FROM registrations 
            ORDER BY created_at DESC 
            LIMIT $1 OFFSET $2
        `

        const result = await pool.query(query, [limit, offset])

        // Get total count
        const countQuery = 'SELECT COUNT(*) FROM registrations'
        const countResult = await pool.query(countQuery)
        const total = parseInt(countResult.rows[0].count)

        return NextResponse.json({
            success: true,
            data: result.rows,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        })

    } catch (err) {
        console.error('Error fetching registrations:', err)
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