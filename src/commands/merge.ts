import { PDFDocument } from 'pdf-lib';
import { readPdf, writePdf } from '../utils/pdfUtils';

export async function merge(files: string[], options: { output: string }) {
  try {
    const mergedPdf = await PDFDocument.create();
    
    for (const file of files) {
      const pdf = await readPdf(file);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    
    await writePdf(mergedPdf, options.output);
    console.log(`Merged PDF saved as ${options.output}`);
  } catch (error) {
    console.error('Error merging PDFs:', error);
  }
}