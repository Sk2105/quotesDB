import db from "@/database/dbConnection";
import { NextResponse } from "next/server";
export async function GET(request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const author = searchParams.get("author") ?? ""; // Retrieves the value of the 'skip' parameter
  const category = searchParams.get("category") ?? ""; // Retrieves the value of the 'skip' parameter

  console.log(author, category);

  const quotes = async () =>
    await db.sql`use database QuotesDB; select id,quote,(select author from authors where id=authorId) as author,(select tag from Tags where id=tagId) as category from quotes`;
  const data = await quotes();
  data.map((quote) => {
    if (quote.author === null) {
      quote.author = "Anonymous";
    }

    if (quote.category === null) {
      quote.category = "General";
    }
  });

  if (author && category) {
    const result = data.filter(
      (quote) => quote.author === author && quote.category === category
    );
    result.map((quote) => {
      if (quote.author === null) {
        quote.author = "Anonymous";
      }

      if (quote.category === null) {
        quote.category = "General";
      }
    });
    return NextResponse.json({ data: result });
  } else if (author) {
    const result = data.filter((quote) => quote.author === author);
    result.map((quote) => {
      if (quote.author === null) {
        quote.author = "Anonymous";
      }

      if (quote.category === null) {
        quote.category = "General";
      }
    });
    return NextResponse.json({ data: result });
  } else if (category) {
    const result = data.filter((quote) => quote.category === category);
    result.map((quote) => {
      if (quote.author === null) {
        quote.author = "Anonymous";
      }

      if (quote.category === null) {
        quote.category = "General";
      }
    });
    return NextResponse.json({ data: result });
  }

  return NextResponse.json({ data: data });
}
