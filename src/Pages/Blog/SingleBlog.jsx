import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";
import '../../Components/Hero.css'



const SingleBlog = () => {
  const { id } = useParams(); // Blog ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.log("No such blog!");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-xl font-semibold"> <Loader /></div>;
  }

  if (!blog) {
    return <div className="text-center h-full mt-10 text-xl font-semibold">Blog not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 leading-relaxed">{blog.content}</p>
      <Link to="/blog" className="text-blue-500 hero-btn w-fit mt-4 block">Back to Blogs</Link>
    </div>
  );
};

export default SingleBlog;
