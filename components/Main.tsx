import { type ComponentChildren } from "preact";
import HamburgerMenu from "../islands/HamburgerMenu.tsx";
import Container from "./Container.tsx";

export default function Main({ children }: { children: ComponentChildren }) {
  return (
    <div class="overflow-x-hidden bg-[#111111] relative min-h-screen w-screen font-syne">
      <img src="/x.svg" alt="" class="absolute top-0" />
      <div class="absolute top-0 w-full">
        <Container>
          <div class="flex items-center space-x-4 text-white font-semibold text-sm">
            <img src="/logo.svg" class="w-32 md:mr-10 lg:mr-20" alt="logo" />
            <a href="#" class="hidden md:block">
              Writeups
            </a>
            <a href="#" class="hidden md:block">
              Resources
            </a>
            <a href="#" class="hidden md:block">
              Blog
            </a>
            <div class="flex-1"></div>
            <a href="#" class="hidden md:block">
              Author
            </a>
            <a href="#" class="hidden md:block">
              Contact
            </a>
            <HamburgerMenu />
          </div>
        </Container>
        {children}
      </div>
    </div>
  );
}
