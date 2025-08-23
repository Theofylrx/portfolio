import fs from 'fs';
import path from 'path';
import { techStack } from '@/data/techStack';

export function loadContent() {
  const filePath = path.join(process.cwd(), 'data', 'content.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const content = JSON.parse(fileContents);
  
  // Use techStack from separate file if content.json doesn't have icon data
  return {
    ...content,
    techStack: content.techStack && content.techStack[0]?.icon ? content.techStack : techStack
  };
}