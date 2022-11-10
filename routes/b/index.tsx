import { PageProps } from "$fresh/server.ts";
import Head from "core/Head.tsx";
import Main from "core/Main.tsx";
import Container from "core/Container.tsx";

export default function BlogHome() {
  return (
    <body class="bg-[#111111] overflow-x-hidden">
      <Head>
        <title>N1mxnd</title>
      </Head>
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
