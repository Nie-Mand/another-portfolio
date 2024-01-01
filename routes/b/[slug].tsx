import { PageProps } from "$fresh/server.ts";
import Head from "core/Head.tsx";
import Main from "core/Main.tsx";
import Container from "core/Container.tsx";
import { Handlers } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { handler } from "utils/load-article.ts";

export default function BlogHome() {
  return (
    <body class="bg-[#111111] overflow-x-hidden">
      <Head />
      <Main>
        <Container>
          <div class="text-white grid place-content-center h-screen ">
            Under Construction
            <div>ha ha</div>
          </div>
        </Container>
      </Main>
    </body>
  );
}
