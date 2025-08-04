import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
    try {
        // Test database connection
        const client = await pool.connect()
        
        // Check if table exists
        const tableCheck = await client.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_name = 'registrations'
            );
        `)
        
        if (!tableCheck.rows[0].exists) {
            return NextResponse.json({
                success: false,
                message: 'Table "registrations" does not exist',
                error: 'Please create the registrations table first'
            }, { status: 500 })
        }
        
        // Get table structure
        const columns = await client.query(`
            SELECT column_name, data_type, is_nullable
            FROM information_schema.columns 
            WHERE table_name = 'registrations'
            ORDER BY ordinal_position;
        `)
        
        client.release()
        
        return NextResponse.json({
            success: true,
            message: 'Database connection successful',
            tableExists: true,
            columns: columns.rows
        })
        
    } catch (err) {
        console.error('Database test error:', err)
        return NextResponse.json({
            success: false,
            message: 'Database connection failed',
            error: err instanceof Error ? err.message : 'Unknown error'
        }, { status: 500 })
    }
} 