import { NextResponse } from "next/server";
import db from "@/database/dbConnection";


/**
 * Returns a quote with the given id.
 * @param {object} params - Query parameters
 * @param {string} params.id - The id of the quote to return
 * @returns {NextResponse} A JSON response with the quote data
 */
export async function GET(request, { params }) {
  const id = params.id;

  if (isNaN(id)) {
    return NextResponse.json({
      status: "bad request",
      message: "Please enter a valid id",
    });
  }

  try {
    const quote = async () => {
      return await db.sql`use database QuotesDB; select id,quote,(select author from authors where id=authorId) as author,(select tag from Tags where id=tagId) as category from quotes where id=${id}`;
    };

    const data = await quote();

    return NextResponse.json(data[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
