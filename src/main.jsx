import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@app/App';
import ContactUs from '@/Pages/ContactUs';
import PrivacyPolicy from '@/Pages/PrivacyPolicy';
import TermsConditions from '@/Pages/TermsConditions';
import ConsumerProtection from '@/Pages/ConsumerProtection';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy/>,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsConditions/>,
  },
  {
    path: "/consumer-protection",
    element: <ConsumerProtection/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
