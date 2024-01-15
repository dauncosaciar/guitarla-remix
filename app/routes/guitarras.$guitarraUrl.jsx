export async function loader({ params }) {
  const { guitarraUrl } = params;

  console.log("guitarraUrl:", guitarraUrl);

  return {};
}

function Guitarra() {
  return <div>$guitarraUrl</div>;
}

export default Guitarra;
