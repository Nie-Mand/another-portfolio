import { PageProps } from "$fresh/server.ts";
import Head from "core/Head.tsx";
import Main from "core/Main.tsx";
import Container from "../components/Container.tsx";

export default function Contact() {
  return (
    <body class="bg-[#111111] overflow-x-hidden">
      <Head>
        <title>N1mxnd</title>
      </Head>
      <Main>
        <Container>
          <div class="text-white grid place-content-center h-screen ">
            <h1 class="text-5xl font-extrabold">404</h1>
          </div>
        </Container>
      </Main>
    </body>
  );
}
