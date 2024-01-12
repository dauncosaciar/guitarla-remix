import { Meta, Links } from "@remix-run/react";
import PropTypes from "prop-types";
import styles from "./styles/index.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Remix"
    }
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles
    }
  ];
}

export default function App() {
  return (
    <Document>
      <h1>Desde App</h1>
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>{children}</body>
    </html>
  );
}

Document.propTypes = {
  children: PropTypes.node.isRequired
};
