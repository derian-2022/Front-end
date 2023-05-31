import React from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () => {
  const router = useRouter();

  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  return (
    <Layout footer={false} title={currentPost.title}>
      <div className="text-center">
        <img
          src={currentPost.imageURL}
          alt=""
          className="img-fluid"
          style={{ width: "50%" }}
        />
        <p>{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;

// const Post = () => {
//   const router = useRouter();

//   const currentPost = posts.find((post) => post.title === router.query.title);

//   if (!currentPost) {
//     // Manejar el caso cuando no se encuentra el post
//     return (
//       <Layout>
//         <div>No se encontró el post.</div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout footer={false} title={currentPost.title}>
//       <div className="text-center">
//         <img
//           src={currentPost.imageURL}
//           alt=""
//           className="img-fluid"
//           style={{ width: "50%" }}
//         />
//         <p>{currentPost.content}</p>
//       </div>
//     </Layout>
//   );
// };

// export default Post;
