// // If absolute URL from the remote server is provided, configure the CORS
// // header on that server.
// var url = '../assets/pdf/bajaj_alliance_non_medical.pdf';

// // Loaded via <script> tag, create shortcut to access PDF.js exports.
// var pdfjsLib = window['pdfjs-dist/build/pdf'];

// // The workerSrc property shall be specified.
// pdfjsLib.GlobalWorkerOptions.workerSrc = './node_modules/pdfjs-dist/build/pdf.worker.min.js';

// // Asynchronous download of PDF
// var loadingTask = pdfjsLib.getDocument(url);
// loadingTask.promise.then(function (pdf) {
//   console.log('PDF loaded');

//   // Fetch the first page
//   var pageNumber = 1;
//   pdf.getPage(pageNumber).then(function (page) {
//     console.log('Page loaded');

//     var scale = 1;
//     var viewport = page.getViewport(scale);

//     console.log(viewport);

//     // Prepare canvas using PDF page dimensions
//     var canvas = document.getElementById('the-canvas');

//     var context = canvas.getContext('2d');
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;// > 800 ? 800 : viewport.width;

//     // context.rect(20, 20, 150, 100);
//     // context.stroke();

//     // Render PDF page into canvas context
//     var renderContext = {
//       canvasContext: context,
//       viewport: viewport
//     };
//     var renderTask = page.render(renderContext);
//     renderTask.promise.then(function () {
//       console.log('Page rendered');
//       // var canvas = document.getElementById('the-canvas');

//       // var context = canvas.getContext('2d');
//       // context.rect(100, 205, 110, 30);
//       // context.stroke();
//     });
//   });
// }, function (reason) {
//   // PDF loading error
//   console.error(reason);
// });
