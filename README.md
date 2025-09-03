Ollopa Home Page
=================

How to use
----------

1. Ensure your assets exist under `src/assets/` with the following names:
   - `logo.png`
   - `BABAE_SA_OLLOPA_WALANG_BG.png`
   - `facebook.svg`, `instagram.svg`, `youtube.svg`, `linkedin.svg`
   - `search.svg`
   - `HomeIcon.svg`, `AboutUsIcon.svg`, `OurServicesIcon.svg`, `OurClientsIcon.svg`, `InternshipIcon.svg`, `ContactUsIcon.svg`, `FAQsIcon.svg`

2. Add the page to your router:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
```

3. The main styles are in `src/pages/Home.css`.

