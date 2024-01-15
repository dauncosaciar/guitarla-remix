import { Link } from "@remix-run/react";
import PropTypes from "prop-types";

function Guitarra({ guitarra }) {
  const { descripcion, imagen, precio, url, nombre } = guitarra;

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>

        <Link className="enlace" to={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default Guitarra;

Guitarra.propTypes = {
  guitarra: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    imagen: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        attributes: PropTypes.shape({
          name: PropTypes.string.isRequired,
          alternativeText: PropTypes.string,
          caption: PropTypes.string,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired,
          formats: PropTypes.shape({
            small: PropTypes.shape({
              ext: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
              hash: PropTypes.string.isRequired,
              mime: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              path: PropTypes.string,
              size: PropTypes.number.isRequired,
              width: PropTypes.number.isRequired,
              height: PropTypes.number.isRequired,
              provider_metadata: PropTypes.shape({
                public_id: PropTypes.string.isRequired,
                resource_type: PropTypes.string.isRequired
              }).isRequired
            }).isRequired,
            medium: PropTypes.shape({
              ext: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
              hash: PropTypes.string.isRequired,
              mime: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              path: PropTypes.string,
              size: PropTypes.number.isRequired,
              width: PropTypes.number.isRequired,
              height: PropTypes.number.isRequired,
              provider_metadata: PropTypes.shape({
                public_id: PropTypes.string.isRequired,
                resource_type: PropTypes.string.isRequired
              }).isRequired
            }).isRequired,
            thumbnail: PropTypes.shape({
              ext: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
              hash: PropTypes.string.isRequired,
              mime: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              path: PropTypes.string,
              size: PropTypes.number.isRequired,
              width: PropTypes.number.isRequired,
              height: PropTypes.number.isRequired,
              provider_metadata: PropTypes.shape({
                public_id: PropTypes.string.isRequired,
                resource_type: PropTypes.string.isRequired
              }).isRequired
            }).isRequired
          }).isRequired,
          hash: PropTypes.string.isRequired,
          ext: PropTypes.string.isRequired,
          mime: PropTypes.string.isRequired,
          size: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
          previewUrl: PropTypes.string,
          provider: PropTypes.string.isRequired,
          provider_metadata: PropTypes.shape({
            public_id: PropTypes.string.isRequired,
            resource_type: PropTypes.string.isRequired
          }).isRequired,
          createdAt: PropTypes.string.isRequired,
          updatedAt: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};
