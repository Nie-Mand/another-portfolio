import { useState } from "preact/hooks";
import Container from "../components/Container.tsx";
import { HambIcon } from "../components/icons.tsx";

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
        )} duration-300 bg-white fixed inset-0 z-10`}
      >
        <Container
          tw={`h-full relative layer-content ${getClassForContent(open)}`}
        >
          <img src="/logo-black.svg" class="w-32" alt="logo" />
          <div class="text-black flex flex-col space-y-8 text-xl py-20 h-full">
            <a href="#" class="">
              Writeups
            </a>
            <a href="#" class="">
              Resources
            </a>
            <a href="#" class="">
              Blog
            </a>
            <div class="flex-1"></div>
            <a href="#" class="">
              Author
            </a>
            <a href="#" class="">
              Contact
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
