import { Injectable } from '@angular/core';
import { NonMedicalFieldMapping, MedicalFieldMapping } from '../document-data-entry/FieldMapData';

@Injectable({
  providedIn: 'root'
})
export class GeneratePdfService {

  constructor() { }

  generatePdf(fileName: string, field: string, type?: string) {
    type = type || 'non-medical'
    var url = '../assets/pdf/' + fileName;
    let map;
    if (type === 'non-medical') {
      map = NonMedicalFieldMapping.find(x => x.name == field);
    } else {
      map = MedicalFieldMapping.find(x => x.name == field);
    }
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = './node_modules/pdfjs-dist/build/pdf.worker.min.js';

    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function (pdf) {
      console.log('PDF loaded');

      var pageNumber = map.page || 1;
      pdf.getPage(pageNumber).then(function (page) {
        console.log('Page loaded');

        var scale = 2;
        var viewport = page.getViewport(scale);

        console.log(viewport);

        var canvas: any = document.getElementById('the-canvas');

        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {

          var canvas: any = document.getElementById('the-canvas');
          var context = canvas.getContext('2d');
          var imageData = context.getImageData(map.posA * scale, map.posB * scale, map.posC * scale, map.posD * scale);

          var canvas1 = document.createElement("canvas");
          canvas1.width = map.posC * scale;
          canvas1.height = map.posD * scale;
          var ctx1 = canvas1.getContext("2d");
          ctx1.rect(0, 0, map.posC * scale, map.posD * scale);
          ctx1.fillStyle = 'white';
          ctx1.fill();
          ctx1.putImageData(imageData, 0, 0);

          var dstImg: any = document.getElementById('newImg');
          dstImg.src = canvas1.toDataURL("image/png");

          context.globalAlpha = 0.3;
          context.fillStyle = "yellow";
          context.fillRect(map.posA * scale, map.posB * scale, map.posC * scale, map.posD * scale)
        });
      });
    }, function (reason) {
      console.error(reason);
    });

  }
}
