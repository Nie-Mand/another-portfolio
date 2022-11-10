import { Head } from "$fresh/runtime.ts";
import { type ComponentChildren } from "preact";

export default function HeadItem({
  children,
}: {
  children: ComponentChildren;
}) {
  return (
    <>
      <Head>
        <title>N1mxnd</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            .font-syne {
                font-family: 'Syne', sans-serif;
            }

            ::-webkit-scrollbar {
                width: 7px;
            }

            ::-webkit-scrollbar-track {
                background: #111111;
            }

            ::-webkit-scrollbar-thumb {
                background: #222222;
            }

            `}
        </style>
        {children}
      </Head>
    </>
  );
}
