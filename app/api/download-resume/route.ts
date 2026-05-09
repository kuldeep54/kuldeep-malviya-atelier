import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  return NextResponse.redirect("https://drive.google.com/file/d/1OeyGQOuqEu464-xpYUW_YI_cUmT-3BYr/view?usp=drive_link");
}
