document.getElementById("openPDFBtn").addEventListener("click", function () {
  var pdfIframe = document.getElementById("pdfIframe");
  var pdfContainer = document.getElementById("pdfContainer");

  // Set the PDF file URL
  var pdfUrl = document.getElementById("cause_pdf_file").value;

  // Set the iframe src to the PDF file URL
  pdfIframe.src = pdfUrl;

  // Show the iframe container
  pdfContainer.classList.remove("hidden");
});
