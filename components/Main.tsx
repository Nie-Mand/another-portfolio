import { type ComponentChildren } from "preact";
import HamburgerMenu from "../islands/HamburgerMenu.tsx";
import Container from "./Container.tsx";
import { HambIcon, X } from "./icons.tsx";

export default function Main({ children }: { children: ComponentChildren }) {
  return (
    <div class="min-h-screen relative w-screen font-syne">
      <X tw="absolute top-0 w-[260vw] -right-[70%]  md:w-full md:right-0 " />
      <nav class="sticky z-20 top-0 w-full py-6 z-20">
        <Container>
          <div class="flex items-center space-x-6 text-white font-semibold text-sm">
            <a href="/">
              <img src="/logo.svg" class="w-32 md:mr-10 lg:mr-20" alt="logo" />
            </a>
            <a href="/whoami" class="hidden md:block">
              Whoami
            </a>
            <a href="/b" class="hidden md:block">
              Blog
            </a>
            <a href="/contact" class="hidden md:block">
              Contact
            </a>
            <div class="flex-1"></div>
            <a
              href="/cv.pdf"
              target="_blank"
              class={`
                  hidden md:flex
                     items-center space-x-4 text-sm
                    focus:outline-none rounded-md p-3 duration-300 
                    text-white bg-black ring-white ring-opacity-10 ring-1
                    hover:text-black hover:bg-white hover:ring-black hover:ring-opacity-50 hover:ring-2 
                    `}
            >
              <HambIcon tw="w-5 h-5" />
              <span class="font-bold">My Resume</span>
            </a>
            <HamburgerMenu />
          </div>
        </Container>
      </nav>
      <div class="absolute top-0 z-10 w-full">{children}</div>
    </div>
  );
}
