import "./globals.css";
import { roboto_mono } from "./fonts/fonts";

<link
  rel="apple-touch-icon"
  href="/apple-icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>

export const metadata = {
  title: "Expanding Cards",
  description: "Expanding Cards by Jasielongas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto_mono.variable}>
      <body
        className="antialiased font-mono"
      >
        {children}
      </body>
    </html>
  );
}
