import { Suspense, lazy } from 'react';
import { Loader, Header, Footer } from '@/components';
import { EmbedPDF } from '@simplepdf/react-embed-pdf';
import React, { useState } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';


function PrivacyPolicy() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



   return (
     <>
       {/* Render the header component */}
       <Header />
 
       {/* This div is used for styling purposes, to adjust the header spacing */}
       <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-1bakope-MuiToolbar-root-Header-contentContainer"></div>
 
       {/* Main content section */}
       <main id="main" className="css-xvkuif-Homepage-root">
         <div className="Content">
           <div className="PageIndex-content">
             <div className="PageIndex-wrapper NeedFixOnPopup">
               
               {/* Lazy-loaded components wrapped in Suspense with a fallback */}
               <Suspense fallback={<Loader />}>

                <div className="row justify-content-center">
        
                  <Document file= "./src/Pages/PrivacyPolicy.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                  </Document>
                  <div>
                    <p>
                      Page {pageNumber} of {numPages}
                    </p>
                    <button
                      type="button"
                      disabled={pageNumber <= 1}
                      onClick={() => setPageNumber(pageNumber - 1)}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      disabled={pageNumber >= numPages}
                      onClick={() => setPageNumber(pageNumber + 1)}
                    >
                      Next
                    </button>
                  </div>



                </div> 
           
              </Suspense>



    

 






             </div>
           </div>
         </div>
       </main>
 
       {/* Render the footer component */}
       <div style={{ marginTop: "295px", clear: "both", left:"0", right:"0", bottom:"0"}}>
          <Footer />
       </div>
       
     </>
   )
}

export default PrivacyPolicy
