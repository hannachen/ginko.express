import { useEffect, useState } from 'react';
import type { MetaFunction } from '@remix-run/node';
import ComingSoon from '~/components/ComingSoon';

export const meta: MetaFunction = () => {
  return [
    { title: 'Ginko Anime North' },
    {
      name: 'description',
      content: "Menu and information on Ginko's takeout booth at Anime North.",
    },
  ];
};

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(true);
  }, []);

  return <div className="app">{isAuthenticated ? <ComingSoon /> : null}</div>;
}
