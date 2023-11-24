import HomeScreen from "../screens/Home/HomeScreen";
import { pages } from "../constants/pages";
import Provider from "../components/Provider/Provider";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: pages[id].name,
  };
}

export default function Home({ params }: { params: { id: string } }) {
  return (
    <Provider>
      <HomeScreen id={params.id} />
    </Provider>
  );
}
