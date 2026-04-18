'use client';

import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFJS_VERSION = '3.11.174';

export default function PdfResumeViewer() {
  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.js`}
    >
      <div className="w-full h-80">
        <Viewer
          fileUrl="/nicholas.wege.pdf"
          defaultScale={SpecialZoomLevel.PageWidth}
          theme={{ theme: 'dark' }}
        />
      </div>
    </Worker>
  );
}
