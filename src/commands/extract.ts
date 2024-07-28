import path from 'path';
import { PDFDocument } from 'pdf-lib';
import { readPdf, writePdf, parsePageRanges, ensureDir } from '../utils/pdfUtils';

export async function extract(input: string, options: { pages: string, output: string }) {
  try {
    const outputDir = path.join(process.cwd(), 'pdf_tool_output', 'extracted');
    await ensureDir(outputDir);
    
    const pdf = await readPdf(input);
    const pageCount = pdf.getPageCount();
    const pagesToExtract = parsePageRanges(options.pages);
    
    const newPdf = await PDFDocument.create();
    
    for (const pageNum of pagesToExtract) {
      if (pageNum > 0 && pageNum <= pageCount) {
        const [page] = await newPdf.copyPages(pdf, [pageNum - 1]);
        newPdf.addPage(page);
      } else {
        console.warn(`Page ${pageNum} is out of range and will be skipped.`);
      }
    }
    
    const outputPath = path.join(outputDir, options.output);
    await writePdf(newPdf, outputPath);
    console.log(`Extracted pages saved as ${outputPath}`);
  } catch (error) {
    console.error('Error extracting pages:', error);
  }
}