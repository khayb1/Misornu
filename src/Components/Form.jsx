import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Btn.css";
import { FaUser, FaEnvelope, FaCommentAlt } from "react-icons/fa";

function Form() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.text();
      if (response.ok && result.includes("success")) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <form onSubmit={onSubmit} className="w-full max-w-md mx-auto space-y-4">
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <FaCommentAlt className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`hero-btn w-fit text-white mx-auto block ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {loading ? "Sending..." : "Let's get to work"}
        </button>
      </form>
    </>
  );
}

export default Form;
