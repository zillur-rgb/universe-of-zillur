import "../styles/globals.css";
import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-bg">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
