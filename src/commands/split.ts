import path from 'path';
import { PDFDocument } from 'pdf-lib';
import { readPdf, writePdf, ensureDir } from '../utils/pdfUtils';

export async function split(input: string, options: { output: string }) {
  try {
    const outputDir = path.join(process.cwd(), 'pdf_tool_output', 'split', path.basename(input, '.pdf'));
    await ensureDir(outputDir);
    
    const pdf = await readPdf(input);
    const pageCount = pdf.getPageCount();
    
    for (let i = 0; i < pageCount; i++) {
      const newPdf = await PDFDocument.create();
      const [page] = await newPdf.copyPages(pdf, [i]);
      newPdf.addPage(page);
      
      const outputPath = path.join(outputDir, options.output.replace('%d', String(i + 1)));
      await writePdf(newPdf, outputPath);
      console.log(`Page ${i + 1} saved as ${outputPath}`);
    }
  } catch (error) {
    console.error('Error splitting PDF:', error);
  }
}