package com.anil.converter.service;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Paths;
import java.util.Base64;

/**
 * @author anil
 */

@Service
public class ReadFile {

	@Value("${file.storage.path}")
	private String folderPath;
	@Value("${file.storage.path.filename}")
	private String filename;

	public String getImgText(MultipartFile file) throws FileNotFoundException {
		if (file.isEmpty()) {
			throw new FileNotFoundException("Not valid file");
		}
		try {
			String filePath = Paths.get(folderPath, file.getOriginalFilename()).toString();
			try (BufferedOutputStream stream = new BufferedOutputStream(
				new FileOutputStream(new File(filePath)))) {
				stream.write(file.getBytes());
				stream.close();
			} catch (FileNotFoundException e) {
				e.getCause();
			} catch (IOException e) {
				e.getCause();
			}
			return getFileText(new File(filePath));

		} catch (TesseractException e) {
			e.getCause();
			throw new UnsupportedOperationException();
		}
	}

	public String getImgText(String encodedString) throws IOException, TesseractException {
		System.out.println("input bas64 : "+encodedString);
		byte[] decodedBytes = Base64.getDecoder().decode(encodedString);
		File outputFile = new File(folderPath + filename);
		FileUtils.writeByteArrayToFile(outputFile, decodedBytes);

		return getFileText(outputFile);
	}

	private String getFileText(File file) throws TesseractException {
		ITesseract instance = new Tesseract();

		String imgText = instance.doOCR(file);
		return imgText;
	}
}
