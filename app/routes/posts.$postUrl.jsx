import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import styles from "~/styles/post.css";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post No Encontrado"
    });
  }

  return post;
}

export function meta({ data }) {
  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.titulo}`
    },
    {
      name: "description",
      content: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo}`
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

function Post() {
  const post = useLoaderData();

  console.log("post:", post);

  return <div>posts.$postUrl</div>;
}

export default Post;
