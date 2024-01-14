import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros"
    },
    {
      name: "description",
      content: "Venta de Guitarras, blog de música"
    }
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Risus feugiat in ante metus dictum at tempor. Sagittis orci a scelerisque purus semper
            eget duis at. Tellus molestie nunc non blandit. Morbi tristique senectus et netus et
            malesuada fames ac turpis. Dictumst quisque sagittis purus sit amet volutpat. Non enim
            praesent elementum facilisis leo. Nulla facilisi morbi tempus iaculis urna id volutpat
            lacus.
          </p>
          <p>
            Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Fermentum et sollicitudin
            ac orci phasellus egestas tellus rutrum. Dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
