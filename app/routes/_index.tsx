import type { MetaFunction } from "@remix-run/node";
import { Header } from '../components/Header';
import { Introduction } from '../components/Introduction';
import { Menu } from "~/components/Menu/Menu";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
