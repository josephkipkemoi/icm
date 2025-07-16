import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ProductPage} from './pages/products';
import GalleryPage from './pages/gallery';
import ArticlePage from './pages/articles';
import AboutUsPage from './pages/about-us';
import ContactPage from './pages/contact-us';
import FAQ from './pages/faq';
import ServicesPage from './pages/services';
import ReturnPage from './pages/returns';
import GiftCardsPage from './pages/gift-cards';
import DeliveryPage from './pages/delivery';
import TermsOfServicePage from './pages/terms-of-service';
import TermsOfUsePage from './pages/terms-of-use';
import CookiePolicyPage from './pages/cookie-policy';
import PrivacyPolicyPage from './pages/privacy-policy';
import NotFoundPage from './pages/not-found';
import ProductItemPage from './pages/product-item';
import ArticleItemPage from './pages/article-item';
import CareerPage from './pages/career';
import CartPage from './pages/cart.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  },
  {
    path: "/cart",
    element: <CartPage/>
  },
  {
    path: "/products/category/:product_category/:id",
    element: <ProductItemPage/>
  },
  {
    path: "/gallery",
    element: <GalleryPage/>
  },
  {
    path: "/articles",
    element: <ArticlePage/>
  },
  {
    path: "/articles/:article_category/:article_id",
    element: <ArticleItemPage/>
  },
  {
    path: "/about-us",
    element: <AboutUsPage/>
  },
  {
    path: "/contact-us",
    element: <ContactPage/>
  },
  {
    path: "/FAQ",
    element: <FAQ/>
  },
  {
    path: "/services",
    element: <ServicesPage/>
  },
  {
    path: "/returns",
    element: <ReturnPage/>
  },
  {
    path: "/gift-cards",
    element: <GiftCardsPage/>
  },
  {
    path: "/delivery",
    element: <DeliveryPage/>
  },
  {
    path: "/terms-of-service",
    element: <TermsOfServicePage/>
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUsePage/>
  },
  {
    path: "/cookie-policy",
    element: <CookiePolicyPage/>
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage/>
  },
  {
    path: "*",
    element: <NotFoundPage/>
  },
  {
    path: "/careers",
    element: <CareerPage/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
