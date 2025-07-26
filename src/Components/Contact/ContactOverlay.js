// src/Components/Contact/ContactOverlay.js
import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactOverlay.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactOverlay({ onClose }) {
  const form = useRef();
  const [formTouched, setFormTouched] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatted =
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
    setTimestamp(formatted);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const phoneInput = form.current.querySelector("input[name='phone']");
    if (phoneInput && phoneInput.value.trim() === "") {
      phoneInput.value = "Not Provided";
    }

    emailjs
      .sendForm(
        "service_v9nxgfc",
        "template_l15tzuu",
        form.current,
        "ch5STSE1_vJXxoBCo"
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
          onClose();
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Try again later.");
      });
  };

  const handleOverlayClick = (e) => {
    if (!formTouched && e.target.classList.contains("contact-overlay")) {
      onClose();
    }
  };

  return (
    <div className="contact-overlay" onClick={handleOverlayClick}>
      <div className="contact-modal">
        {formTouched && (
          <button className="contact-close" onClick={onClose}>
            ✖
          </button>
        )}
        <h2>
          <span className="contact-avatar">💬</span> Let’s Connect
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          onChange={() => setFormTouched(true)}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Phone (Optional)" />
          <input type="text" name="title" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="hidden" name="timestamp" value={timestamp} />
          <button type="submit">📨 Send Message</button>
        </form>
      </div>
    </div>
  );
}
