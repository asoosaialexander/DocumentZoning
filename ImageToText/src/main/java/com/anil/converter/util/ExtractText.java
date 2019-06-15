package com.anil.converter.util;

/**
 * @author anil
 */

import com.qoppa.pdfProcess.PDFDocument;

public class ExtractText
{
	public static void main (String [] args)
	{
		try
		{
			// Load the document
			PDFDocument pdfDoc = new PDFDocument ("/home/anil/anil/projects/QA/ImageToText/src/main/resources/AcrobatDocument2.pdf", null);

			// Get the text for the document
			String docText = pdfDoc.getText();

			System.out.println(docText);
			// Save the text in a file
//			FileWriter output = new FileWriter ("output.txt");
//			output.write(docText);
//			output.close();

			//
			// Text can also be retrieved for each page using
			//    pdfDoc.getText (pageIx)
			//
		}
		catch (Throwable t)
		{
			t.printStackTrace();
		}
	}


}
