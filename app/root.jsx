import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
  Link
} from "@remix-run/react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import styles from "~/styles/index.css";

export function meta({ error }) {
  if (error) {
    return [
      {
        title: `GuitarLA - ${error.statusText}`
      },
      {
        name: "description",
        content: `Guitarras, venta de guitarras, ${error.statusText}`
      }
    ];
  }

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
      <Outlet />
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
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/* Manejo de errores */
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">
          {error.status} {error.statusText}
        </p>
        <Link className="error-enlace" to="/">
          Tal vez quieras volver a la página principal
        </Link>
      </Document>
    );
  }
}
