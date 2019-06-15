package com.anil.converter.util;

/**
 * @author anil
 */
import com.qoppa.ocr.OCRBridge;
import com.qoppa.ocr.TessJNI;
import com.qoppa.pdfProcess.PDFDocument;
import com.qoppa.pdfProcess.PDFPage;

public class OCRPDFPages
{
	/* This sample code will open a PDF and OCR its pages */
	/* Then save the document */

	public static void main(String[] args)
	{
		try
		{

			// Load a PDF that contains scanned pages needing to be OCRed
			PDFDocument pdfDoc = new PDFDocument("/home/anil/anil/projects/QA/ImageToText/src/main/resources/AcrobatDocument.pdf", null);
			// follow instruction in our kb to copy the tesseract libraries under "C:/test/tesseract"
			// and language files "C:/test/tesseract/tessdata"
			OCRBridge.initialize("/home/anil/anil/projects/QA/ImageToText/tessdata", "/home/anil/anil/projects/QA/ImageToText/tessdata");
			TessJNI ocr = new TessJNI();
			for (int count = 0; count < pdfDoc.getPageCount(); ++count)
			{
				PDFPage page = pdfDoc.getPage(count);
				String pageOCR = ocr.performOCR("eng", page, 300);
				page.insert_hOCR(pageOCR, false);
			}

			// Save the output document
			pdfDoc.saveDocument("/home/anil/anil/projects/QA/ImageToText/tessdata/test_ocr.pdf");
		}
		catch (Throwable t)
		{
			t.printStackTrace();
		}
	}
}
