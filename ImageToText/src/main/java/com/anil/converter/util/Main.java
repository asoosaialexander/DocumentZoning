package com.anil.converter.util;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

import java.io.File;

/**
 * @author anil
 */
public class Main {



	public String getImgText(String imageLocation) {
		ITesseract instance = new Tesseract();
		try
		{
			String imgText = instance.doOCR(new File(imageLocation));
			return imgText;
		}
		catch (TesseractException e)
		{
			e.getCause();
			return "Error while reading image";
		}
	}
	public static void main ( String[] args)
	{
		Main app = new Main();

		System.out.println(app.getImgText("/home/anil/anil/projects/QA/ImageToText/src/main/resources/AcrobatDocument2.pdf"));
	}
}
