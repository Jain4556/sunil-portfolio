"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function ResumeViewer() {
  return (  
    <Document
      file="/suniljain.pdf"
      loading={
        <div className="py-20 text-center text-zinc-500">
          Loading Resume...
        </div>
      }
    >
      <Page
        pageNumber={1}
        width={760}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </Document>
  );
}