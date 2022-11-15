import { type NextPage } from "next";
import Link from "next/link";

import { trpc } from "../utils/trpc";

import Header from "../components/header";
import Footer from "../components/footer";
import VSelfButton from "../components/vselfbutton"

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