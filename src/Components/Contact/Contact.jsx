import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Lets Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>sumonahmed012340@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Keraniganj, Dhaka-1310</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+88-01721447979</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form onSubmit={sendEmail} ref={formRef}>
          <label htmlFor="contact-name" className="visually-hidden">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Name"
            name="name"
          />

          <label htmlFor="contact-email" className="visually-hidden">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="Email"
            name="email"
          />

          <label htmlFor="contact-message" className="visually-hidden">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={8}
            placeholder="Message"
            name="message"
            required
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          <p className="formStatus" aria-live="polite">
            {status === "error" &&
              "Something went wrong. Please try again."}
            {status === "success" && "Message sent successfully!"}
          </p>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
