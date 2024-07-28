import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';

export async function readPdf(path: string): Promise<PDFDocument> {
  const pdfBytes = await fs.readFile(path);
  return await PDFDocument.load(pdfBytes);
}

export async function writePdf(doc: PDFDocument, path: string): Promise<void> {
  const pdfBytes = await doc.save();
  await fs.writeFile(path, pdfBytes);
}

export async function ensureDir(dirPath: string): Promise<void> {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
        throw error;
      }
    }
  }

export function parsePageRanges(pageString: string): number[] {
  const pages: number[] = [];
  const ranges = pageString.split(',');
  
  for (const range of ranges) {
    if (range.includes('-')) {
      const [start, end] = range.split('-').map(Number);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    } else {
      pages.push(Number(range));
    }
  }
  
  return pages.sort((a, b) => a - b);
}