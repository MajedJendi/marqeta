import { Suspense, lazy } from 'react';
import './ContactUs.css';
import { Loader, Header, Footer } from '@/components';
const ContactForm = lazy(() => import('@components/ContactForm'));

function ContactUs() {
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
               
                  <ContactForm/>
               
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

export default ContactUs
