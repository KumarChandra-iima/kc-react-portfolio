// ContactOverlay.js
import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactOverlay.css";

export default function ContactOverlay({ userEmail }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [formDirty, setFormDirty] = useState(false);
  const [timestamp, setTimestamp] = useState("");
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_v9nxgfc",
        "template_l15tzuu",
        formRef.current,
        "ch5STSE1_vJXxoBCo"
      );
      toast.success("Message sent successfully! 💌");
      setShowOverlay(false);
      setFormDirty(false);
      formRef.current.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !formDirty) {
        setShowOverlay(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [formDirty]);

  useEffect(() => {
    const now = new Date();
    const formattedTimestamp =
      now.getFullYear() +
      ":" +
      String(now.getMonth() + 1).padStart(2, "0") +
      ":" +
      String(now.getDate()).padStart(2, "0") +
      " " +
      String(now.getHours()).padStart(2, "0") +
      ":" +
      String(now.getMinutes()).padStart(2, "0") +
      ":" +
      String(now.getSeconds()).padStart(2, "0") +
      ":" +
      String(now.getMilliseconds()).padStart(3, "0");
    setTimestamp(formattedTimestamp);
  }, []);

  return (
    <div className="contact-container">
      <button className="contact-button" onClick={() => setShowOverlay(true)}>
        Contact Me
      </button>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            {formDirty && (
              <button
                className="close-button"
                onClick={() => setShowOverlay(false)}
              >
                &times;
              </button>
            )}
            <h2 className="overlay-title">Let’s Connect 💬</h2>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              onChange={() => setFormDirty(true)}
              className="overlay-form"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="text" name="title" placeholder="Subject" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                defaultValue={userEmail || ""}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <input type="hidden" name="timestamp" value={timestamp} />
              <button type="submit" className="submit-button">
                📩 Send
              </button>
            </form>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
}
