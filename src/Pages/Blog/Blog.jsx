import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import MainHeader from "../../Components/MainHeader";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-xl font-semibold"><Loader/></div>;
  }


  const stripHtml = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };
  
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Blog - Misornu</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
      <MainHeader />

    <div className=" mx-10 mt-10 p-6">
      
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
             <Link to={`/blogs/${blog.id}`} key={blog.id}>
               <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                 {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">
                  {stripHtml(blog.content).length > 100
                    ? stripHtml(blog.content).substring(0, 100) + "..."
                    : stripHtml(blog.content)}
                </p>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </> 
  );
};

export default Blog;







