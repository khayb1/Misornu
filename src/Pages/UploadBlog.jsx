import { useState } from "react";
import { db, storage } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Logout from "./Logout";
import { Helmet } from "react-helmet";
import ReactQuill from "react-quill"; // Import React Quill
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const UploadBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Content will now store HTML from Quill
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Quill editor configuration (optional customization)
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "link",
    "image",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      // 1. Upload image to storage if user selected an image
      if (image) {
        const imageRef = ref(storage, `blogImages/${image.name}-${Date.now()}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      // 2. Save blog details to Firestore
      await addDoc(collection(db, "blogs"), {
        title,
        content, // Content now includes HTML from Quill
        imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Blog uploaded successfully!");
      setTitle("");
      setContent(""); // Reset Quill content
      setImage(null);
    } catch (error) {
      console.error("Error uploading blog:", error);
      alert("Failed to upload blog. Please try again.");
    }

    setLoading(false);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Upload Blog - Misornu</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Upload a Blog</h2>

        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
          <div>
            <label className="block mb-2 text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full border p-3 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Content</label>
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={quillModules}
              formats={quillFormats}
              className="h-64 mb-10" // Adjust height and margin
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium w-fit">
              Upload Image (optional)
            </label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && (
              <div className="mt-4 ">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-48 h-48 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-fit  bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {loading ? "Uploading..." : "Submit Blog"}
          </button>
        </form>
        <Logout />
      </div>
    </>
  );
};

export default UploadBlog;