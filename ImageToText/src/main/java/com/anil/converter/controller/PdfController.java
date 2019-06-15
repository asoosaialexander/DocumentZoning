package com.anil.converter.controller;

import com.anil.converter.service.ReadFile;
import com.anil.converter.service.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;

/**
 * @author anil
 */

@RestController
public class PdfController {

	@Autowired
	private ReadFile readFile;

	@PostMapping(value = "/pdf/file/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = "application/json")
	public @ResponseBody
	ResponseEntity uploadfile(@RequestParam("file") MultipartFile file) {
		try {

			return ResponseEntity.ok(new ModelMap("msg", readFile.getImgText(file)));
		} catch (Exception e) {
			return ResponseEntity.unprocessableEntity().build();
		}

	}

	@PostMapping(value = "/image/upload", consumes = "application/json", produces = "application/json")
	public @ResponseBody
	ResponseEntity uploadBase64Image(@RequestBody Request encodedString) {
		try {
			if (encodedString == null && StringUtils.isEmpty(encodedString.getImg())) {
				throw new Exception("Missing reqired fields");
			}
			return ResponseEntity.ok(new ModelMap("msg", readFile.getImgText(encodedString.getImg())));
		} catch (Exception e) {
			System.out.println("exception: "+e.getLocalizedMessage());
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(new ModelMap("msg",e.getMessage()));
		}

	}
}
