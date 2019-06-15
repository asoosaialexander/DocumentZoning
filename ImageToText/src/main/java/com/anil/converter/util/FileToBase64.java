package com.anil.converter.util;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.util.Base64;

/**
 * @author anil
 */
public class FileToBase64 {
	public static void main(String[] args) throws IOException {
		byte[] fileContent = FileUtils.readFileToByteArray(new File("/home/anil/Downloads/testimg.png"));
		String encodedString = Base64
			.getEncoder()
			.encodeToString(fileContent);
		System.out.println(encodedString);
	}
}
