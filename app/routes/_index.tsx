import type { MetaFunction } from '@remix-run/node';
import { Header } from '~/components/Header';
import { Introduction } from '~/components/Introduction';
import { Menu } from '~/components/Menu/Menu';

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
  return (
    <div>
      <Header />
      <Introduction />
      <Menu />
    </div>
  );
}
