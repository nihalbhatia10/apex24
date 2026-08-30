import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // The Google Apps Script URL provided by the user
    const scriptUrl = "https://script.google.com/macros/s/AKfycbw--4_dA9l3jJM1NRAhRk1WM5cgW-qjWab-lPylQDIub34psL1bDyLqLXm3t17383By/exec";
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ result: 'error' }, { status: 500 });
  }
}
