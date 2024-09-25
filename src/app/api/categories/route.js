import { NextResponse } from "next/server";
import db from "@/database/dbConnection";

/**
 * Returns all the categories from the database
 * @returns {NextResponse} A JSON response with the categories
 */
export async function GET() {
  try {
    const categories = async () => {
      return await db.sql`use database QuotesDB; select tag from Tags`;
    };
    const data = await categories();
    const res = data.map((category) => {
      return category["tag"];
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
