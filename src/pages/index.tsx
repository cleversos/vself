import { type NextPage } from "next";
import Link from "next/link";

import { trpc } from "../utils/trpc";

import Header from "../components/header";
import Footer from "../components/footer";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="bg-black min-h-screen">
        <Header/>
        <section className="container mx-auto flex flex-col items-center justify-start p-4 min-h-full">
          <h1 className="text-6xl text-white">vStudio</h1>
          <p className="text-2xl text-gray-500">When privacy <span className="underline">comes first</span></p>
          <p className="text-xl text-gray-600 text-center max-w-lg">Revolution the way web3 onboarding create private communities where the governance method is a choice</p>
        </section>
        <Footer/>
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  description,
  documentation,
}) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <Link
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </Link>
    </section>
  );
};
