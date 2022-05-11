import "../styles/globals.css";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  nprogress.start();
});

Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routeChangeError", () => nprogress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-bg">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
