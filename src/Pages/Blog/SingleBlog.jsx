import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";
import '../../Components/Hero.css'
import { Helmet } from "react-helmet";


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
    
    <>
     <Helmet>
      <meta charSet="utf-8" />
      <title>{blog.title} - Misornu</title>
      <link rel="canonical" href="http://misornu.vercel.app/blog/" />
    </Helmet>
        <div className="max-w-3xl mx-auto mt p-6 bg-gray-100">
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-[90%] mx-auto  h-96 object-cover object-[10%_10%] rounded-lg mb-6"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-900 leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.content }} />
      <Link to="/blog" className="text-blue-500 hero-btn w-fit mt-4 block">Back to Blogs</Link>
    </div>
    </>

  );
};

export default SingleBlog;
