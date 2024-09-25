import { NextResponse } from "next/server";
import db from "@/database/dbConnection";

/**
 * Returns an array of all the authors in the database
 * @returns {NextResponse} A JSON response with an array of authors
 */
export async function GET() {
    try {
        const authors = async () => {
            return await db.sql`use database QuotesDB; select author from Authors`;
        };
        const data = await authors();

        const res = data.map((author) => {
            return author["author"];
        })
        
        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}