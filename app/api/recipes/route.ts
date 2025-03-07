import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || '';
    const cuisine = searchParams.get('cuisine') || '';
    const maxTime = searchParams.get('maxTime') ? Number(searchParams.get('maxTime')) : undefined;

    const apiKey = process.env.SPOONACULAR_API_KEY;
    if (!apiKey) throw new Error('Missing API key');

    const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
    url.searchParams.append('query', query);
    url.searchParams.append('cuisine', cuisine);
    if (maxTime) url.searchParams.append('maxReadyTime', maxTime.toString());
    url.searchParams.append('apiKey', apiKey);

    const res = await fetch(url.toString());

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API error: ${res.status} ${errorText}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}