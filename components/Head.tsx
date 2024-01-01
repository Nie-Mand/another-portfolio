import { Head } from "$fresh/runtime.ts";
import { type ComponentChildren } from "preact";

export default function HeadItem() {
  console.log();

  return (
    <>
      <Head>
        <title>N1mxnd ~ hmlndr</title>
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


            .layer-init {
                right: 100%;
            }

            .layer {
                animation: 1s show ease-in-out;
                -webkit-animation: 0.6s show ease-in-out;
                   -moz-animation: 0.6s show ease-in-out;
                    -ms-animation: 0.6s show ease-in-out;
                     -o-animation: 0.6s show ease-in-out;
                        animation: 0.6s show ease-in-out;
                            animation-fill-mode: both;
            }

            .layer-content {
                animation: 1s opacity-in ease-in-out;
                -webkit-animation: 0.3s opacity-in ease-in;
                   -moz-animation: 0.3s opacity-in ease-in;
                    -ms-animation: 0.3s opacity-in ease-in;
                     -o-animation: 0.3s opacity-in ease-in;
                        animation: 0.3s opacity-in ease-in;
                            animation-fill-mode: both;

                    animation-delay: 0.6s;
            }

            .layer-content-bye {
                animation: 1s opacity-out ease-in-out;
                -webkit-animation: 0.3s opacity-out ease-in;
                   -moz-animation: 0.3s opacity-out ease-in;
                    -ms-animation: 0.3s opacity-out ease-in;
                     -o-animation: 0.3s opacity-out ease-in;
                        animation: 0.3s opacity-out ease-in;
                            animation-fill-mode: both;

            }

            .layer-bye {
                animation: 1s bye ease-in-out;
                -webkit-animation: 0.6s bye ease-in-out;
                   -moz-animation: 0.6s bye ease-in-out;
                    -ms-animation: 0.6s bye ease-in-out;
                     -o-animation: 0.6s bye ease-in-out;
                        animation: 0.6s bye ease-in-out;
                            animation-fill-mode: both;
            }


            @keyframes opacity-in {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }

            @-moz-keyframes opacity-in {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
            
            @-webkit-keyframes opacity-in {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
            
            @-ms-keyframes opacity-in {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
            
            @-o-keyframes opacity-in {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }

            @keyframes opacity-out {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }

            @-moz-keyframes opacity-out {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
            
            @-webkit-keyframes opacity-out {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
            
            @-ms-keyframes opacity-out {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
            
            @-o-keyframes opacity-out {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }


            @keyframes show {
                0% { right: 100%; }
                100% { right: 0%; }
            }

            @-moz-keyframes show {
                0% { right: 100%; }
                100% { right: 0%; }
            }
            
            @-webkit-keyframes show {
                0% { right: 100%; }
                100% { right: 0%; }
            }
            
            @-ms-keyframes show {
                0% { right: 100%; }
                100% { right: 0%; }
            }
            
            @-o-keyframes show {
                0% { right: 100%; }
                100% { right: 0%; }
            }

            @keyframes bye {
                100% { right: 100%; }
                0% { right: 0%; }
            }

            @-moz-keyframes bye {
                100% { right: 100%; }
                0% { right: 0%; }
            }
            
            @-webkit-keyframes bye {
                100% { right: 100%; }
                0% { right: 0%; }
            }
            
            @-ms-keyframes bye {
                100% { right: 100%; }
                0% { right: 0%; }
            }
            
            @-o-keyframes bye {
                100% { right: 100%; }
                0% { right: 0%; }
            }
            
                
            `}
        </style>
      </Head>
    </>
  );
}
