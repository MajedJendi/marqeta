import { Suspense, lazy } from 'react';
import './PrivacyPolicy.css';
import { Loader, Header, Footer } from '@/components';
import { EmbedPDF } from '@simplepdf/react-embed-pdf';


function PrivacyPolicy() {

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

                <EmbedPDF
                  companyIdentifier="react-viewer"
                  mode="inline"
                  style={{ width: 900, height: 800 }}
                  documentURL="https://cdn.simplepdf.com/simple-pdf/assets/sample.pdf"
                />;

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
