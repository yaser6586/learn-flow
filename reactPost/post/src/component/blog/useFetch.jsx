import { useEffect, useState } from "react";

function useFetch(url) {
  const [blogPost, setBlogPost] = useState([{}]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let closeFetch = false;
    setTimeout(() => {
      fetch(url)
        .then((blog) => {
          if (!blog.ok) {
            throw Error("fetch have not been successful");
          }
          if (!closeFetch) {
            return blog.json();
          }
        })
        .then((postList) => {
          setBlogPost(postList);
          setLoading(false);
        })
        .catch((err) => setError(err.message));
      return () => (closeFetch = true);
    }, 1000);
  }, []);
  return { blogPost, error, loading };
}

export default useFetch;
