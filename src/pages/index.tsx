import Head from "next/head";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { DetailsSection, ImageSection } from "@/components";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex bg-white flex-1 h-screen relative gap-2">
        <Head>
          <title>Cardo</title>
        </Head>
        <DetailsSection />
        <ImageSection />
      </main>
    </Suspense>
  );
}
