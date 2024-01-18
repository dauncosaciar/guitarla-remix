import styles from "~/styles/carrito.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Carrito de Compras"
    },
    {
      name: "description",
      content: "Venta de guitarras, música, blog, carrito de compras, tienda"
    }
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ];
}

function Carrito() {
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>

      <div className="contenido">
        <div className="carrito">
          <h2>Artículos</h2>
        </div>

        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: $</p>
        </aside>
      </div>
    </main>
  );
}

export default Carrito;
