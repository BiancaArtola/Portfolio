import { getThemeInitScript } from "farol-ui";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* Aplica el tema guardado antes de pintar para evitar el parpadeo. */}
        <script dangerouslySetInnerHTML={{ __html: getThemeInitScript() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
