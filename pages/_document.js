import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
        />
      </Head>
      <body class="font-sans font-normal leading-relaxed text-gray-800 text-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}