import { PageProps } from "$fresh/server.ts";
import Head from "core/Head.tsx";
import Main from "core/Main.tsx";
import Container from "core/Container.tsx";
import { Blockchain, Infinite } from "../../components/icons.tsx";

export default function BlogHome() {
  return (
    <body class="bg-[#111111] overflow-x-hidden">
      <Head />
      <Main>
        <Container>
          <div class="text-white grid place-content-center h-screen ">
            Under Construction
            {/* <div>
              <Blockchain tw="w-10 h-10" />
              <Infinite tw="w-10 h-10" />
            </div> */}
          </div>
        </Container>
      </Main>
    </body>
  );
}
