import { NextResponse } from "next/server";
import db from "@/database/dbConnection";
/**
 * Returns a random quote from the database.
 * @returns {NextResponse} A JSON response with a random quote
 */
export async function GET() {
  try {
    const quotes = async () => {
      return await db.sql`use database QuotesDB; select id,quote,(select author from authors where id=authorId) as author,(select tag from Tags where id=tagId) as category from quotes where id = (select ABS(random()) % (select count(*) from quotes) + 1)`;
    };
    const result = await quotes();
    const quote = result[0];
    quote.author = quote.author === null ? "Anonymous" : quote.author;
    quote.category = quote.category === null ? "General" : quote.category;
    return NextResponse.json(quote);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
