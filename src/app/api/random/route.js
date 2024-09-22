import { NextResponse } from "next/server";
import db from "@/database/dbConnection";
export async function GET() {
  try {
    const quotes = async () => {
      return await db.sql`use database QuotesDB; select id,quote,(select author from authors where id=authorId) as author,(select tag from Tags where id=tagId) as category from quotes`;
    };
    const data = await quotes();
    const random = Math.floor(Math.random() * data.length);
    const result = data[random];
    result.author = result.author === null ? "Anonymous" : result.author;
    result.category = result.category === null ? "General" : result.category;
    return NextResponse.json(data[random]);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
