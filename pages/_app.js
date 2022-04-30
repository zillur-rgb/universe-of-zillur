import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-auto lg:h-screen bg-bg">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
