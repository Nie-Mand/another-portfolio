import { useState } from "preact/hooks";
import Container from "../components/Container.tsx";
import { HambIcon, X } from "../components/icons.tsx";

function getClassForContainer(isOpen: boolean | null) {
  if (isOpen === null) return "layer-init";
  return isOpen ? "layer" : "layer-bye";
}

function getClassForContent(isOpen: boolean | null) {
  if (isOpen === null) return "hidden";
  return isOpen ? "layer-content" : "layer-content-bye";
}

export default function HamburgerMenu() {
  const [open, setOpen] = useState<null | boolean>(null);

  return (
    <div>
      <div
        class={`${getClassForContainer(
          open
        )} duration-300 bg-white fixed inset-0 z-20 overflow-hidden`}
      >
        <X
          color="#dedede"
          tw="absolute top-0 w-[260vw] -right-[70%]  md:w-full md:right-0"
        />
        <Container
          tw={`py-7 absolute top-0 h-full relative layer-content ${getClassForContent(
            open
          )}`}
        >
          <a href="/">
            <img src="/logo-black.svg" class="w-32" alt="logo" />
          </a>

          <div class="text-black flex flex-col space-y-8 text-xl py-20 h-full">
            <a href="/whoami">Whoami</a>
            <a href="/b">Blog</a>
            <a href="/contact">Contact</a>
            <div class="flex-1"></div>
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
          </div>
        </Container>
      </div>
      <button
        onClick={() => setOpen(!open)}
        class={`relative z-20 md:hidden focus:outline-none rounded-md  p-3 duration-300 ${
          open
            ? "text-black bg-white ring-black ring-opacity-50 ring-2"
            : "text-white bg-black ring-white ring-opacity-10 ring-1"
        }`}
      >
        <HambIcon tw="w-5 h-5" />
      </button>
    </div>
  );
}
