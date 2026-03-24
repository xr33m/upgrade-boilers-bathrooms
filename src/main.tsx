import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { reportWebVitals } from './lib/web-vitals';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals((metric) => {
  console.log('Web Vital:', {
    name: metric.name,
    value: Math.round(metric.value),
    rating: metric.rating,
  });
});
