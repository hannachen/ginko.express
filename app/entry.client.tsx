/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-_sh7wJBZefA_1SmVJbiVuRrXidZKpPQ",
  authDomain: "ginko-express.firebaseapp.com",
  projectId: "ginko-express",
  storageBucket: "ginko-express.appspot.com",
  messagingSenderId: "992641612981",
  appId: "1:992641612981:web:3fee4599b100338ee812fc",
  measurementId: "G-V4W7WP8LCF"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
