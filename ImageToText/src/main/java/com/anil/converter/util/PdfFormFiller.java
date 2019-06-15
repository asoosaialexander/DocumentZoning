//package com.anil.converter;
//
///**
// * @author anil
// */
//import org.apache.pdfbox.pdmodel.PDDocument;
//import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
//import org.apache.pdfbox.pdmodel.interactive.form.*;
//import java.io.File;
//import java.util.*;
//
//public class pdf_form_filler {
//
//	public static void listFields(PDDocument doc) throws Exception {
//		PDDocumentCatalog catalog = doc.getDocumentCatalog();
//		PDAcroForm form = catalog.getAcroForm();
//		List<PDFieldTreeNode> fields = form.getFields();
//
//		for(PDFieldTreeNode field: fields) {
//			Object value = field.getValue();
//			String name = field.getFullyQualifiedName();
//			System.out.print(name);
//			System.out.print(" = ");
//			System.out.print(value);
//			System.out.println();
//		}
//	}
//
//	public static void main(String[] args) throws Exception {
//		File file = new File("test.pdf");
//		PDDocument doc = PDDocument.load(file);
//		listFields(doc);
//	}
//
//}
