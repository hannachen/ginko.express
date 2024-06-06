'use client';

import { useState, useEffect } from 'react';
import ComingSoon from './components/ComingSoon';

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(true);
  }, []);

  return <div className="app">{isAuthenticated ? <ComingSoon /> : null}</div>;
}
