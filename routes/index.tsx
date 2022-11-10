import Counter from "../islands/Counter.tsx";
import Head from "core/Head.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>N1mxnd</title>
      </Head>
      <div class="overflow-x-hidden bg-[#111111]">
        <img src="/x.svg" alt="" />
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <p class="font-syne font-black">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
