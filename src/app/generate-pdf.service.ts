import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratePdfService {

  constructor() { }

  generatePdf(fileName:string,pageNo:number) {
    var url = '../assets/pdf/'+fileName;
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = './node_modules/pdfjs-dist/build/pdf.worker.min.js';

    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function (pdf) {
      console.log('PDF loaded');

      var pageNumber = pageNo;
      pdf.getPage(pageNumber).then(function (page) {
        console.log('Page loaded');

        var scale = 1;
        var viewport = page.getViewport(scale);

        console.log(viewport);

        var canvas:any = document.getElementById('the-canvas');

        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;// > 800 ? 800 : viewport.width;

        // context.rect(20, 20, 150, 100);
        // context.stroke();

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
          // console.log('Page rendered');
          // console.log('in service');
          // var canvas:any = document.getElementById('the-canvas');
          // var context = canvas.getContext('2d');
          // context.rect(posA, posB, posC, posD);
          // context.stroke();
        });
      });
    }, function (reason) {
      // PDF loading error
      console.error(reason);
    });

  }
}
