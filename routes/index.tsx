import Head from "core/Head.tsx";
import Main from "core/Main.tsx";
import Container from "../components/Container.tsx";
import { GitHub, HambIcon, LinkedIn } from "../components/icons.tsx";

export default function Home() {
  return (
    <body class="bg-[#111111] overflow-x-hidden">
      <Head>
        <title>N1mxnd</title>
      </Head>
      <Main>
        <Container>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 h-screen">
            <div class="grid content-center h-screen">
              <h1 class="text-4xl sm:text-5xl md:text-6xl">
                <span class="font-bold text-white">H3llo </span>
                <span class="font-extrabold text-primary">W0rld </span>
                <div class="block md:hidden lg:block" />
                <span class="font-extrabold text-white">Log</span>
              </h1>
              <p class="text-white py-4">
                My Notes, Journals, Code Pieces.. and Everything I <br />
                have learnt -and learning- during my Journey
              </p>
              <div class="flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-4">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  class={`
                    flex items-center space-x-4 text-sm
                    focus:outline-none rounded-md p-3 duration-300 
                    text-white bg-black ring-white ring-opacity-10 ring-1
                    hover:text-black hover:bg-white hover:ring-black hover:ring-opacity-50 hover:ring-2 
                    `}
                >
                  <HambIcon tw="w-5 h-5" />
                  <span class="font-bold">Download my Resume</span>
                </a>
                <a
                  href="/b"
                  class={`
                    flex items-center space-x-4 text-sm
                    focus:outline-none rounded-md p-3 duration-300 
                    text-white bg-black ring-white ring-opacity-10 ring-1
                    hover:text-black hover:bg-white hover:ring-black hover:ring-opacity-50 hover:ring-2 
                    `}
                >
                  <span class="font-medium">Visit My Blog</span>
                </a>
              </div>
            </div>
            <div class="hidden md:grid content-center justify-items-end">
              <div class="grid grid-cols-2 gap-6">
                <div class="w-32 h-32 lg:w-36 lg:h-36 group bg-primary rounded-full grid place-content-center">
                  <GitHub tw="w-16 h-16 text-white group-hover:scale-110 duration-300 ease-out" />
                </div>
                <div class="w-32 h-32 lg:w-36 lg:h-36 bg-[#1f1f1f] rounded-md"></div>

                <div class="w-32 h-32 lg:w-36 lg:h-36 bg-[#333333]"></div>
                <div class="w-32 h-32 lg:w-36 lg:h-36 cursor-pointer group bg-primary-dark rounded-md grid place-content-center">
                  <LinkedIn tw="w-16 h-16 text-white group-hover:scale-110 duration-300 ease-out" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </body>
  );
}
