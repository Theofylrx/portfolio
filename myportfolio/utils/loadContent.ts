import fs from 'fs';
import path from 'path';

export function loadContent() {
  const filePath = path.join(process.cwd(), 'data', 'content.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}