import { PageProps } from "$fresh/server.ts";
import Head from "core/Head.tsx";
import Main from "core/Main.tsx";
import Container from "../components/Container.tsx";

export default function Whoami() {
  return (
    <body class="bg-[#111111] overflow-x-hidden">
      <Head />
      <Main>
        <Container>
          <div class="text-white grid place-content-center h-screen ">
            Under Construction
          </div>
        </Container>
      </Main>
    </body>
  );
}
