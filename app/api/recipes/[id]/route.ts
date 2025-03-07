import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const apiKey = process.env.SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch recipe details');

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching recipe details' }, { status: 500 });
  }
}