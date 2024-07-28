import path from 'path';
import { PDFDocument } from 'pdf-lib';
import { readPdf, writePdf, ensureDir } from '../utils/pdfUtils';

export async function merge(files: string[], options: { output: string }) {
  try {
    const outputDir = path.join(process.cwd(), 'pdf_tool_output', 'merged');
    await ensureDir(outputDir);
    
    const mergedPdf = await PDFDocument.create();
    
    for (const file of files) {
      const pdf = await readPdf(file);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    
    const outputPath = path.join(outputDir, options.output);
    await writePdf(mergedPdf, outputPath);
    console.log(`Merged PDF saved as ${outputPath}`);
  } catch (error) {
    console.error('Error merging PDFs:', error);
  }
}