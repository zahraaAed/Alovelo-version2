import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import Footer from "../component/footer";

export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_0qtho82"; 
    const templateID = "template_g9ol0hv"; 
    const publicKey = "Xj730mnMzgxCUOnaT"; 

    // Email parameters (must match the variables in your Email.js template)
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Admin",
    };

    emailjs
      .send(serviceID, templateID, emailParams, publicKey)
      .then(() => {
        alert("Message was sent successfully! ✅"); 
        setFormData({ name: "", email: "", subject: "", message: "" }); 
      })
      .catch((err) => {
        alert("Failed to send message. ❌ Please try again."); 
        console.error("Email.js error:", err);
      });
  };

  return (
   <div className={styles.pageContainer}>
    <div className={styles.contactSection}>
      <h1 className={styles.heading}>HAVE AN EVENT COMING UP?</h1>
      <p className={styles.subtitle}>
        Contact us today to book your tricycle bar experience.
      </p>

      <form className={styles.contactForm} onSubmit={sendEmail}>
        {/* Name + Email side by side */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className={styles.input}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div className={styles.formGroupMessage}>
          <input
            type="text"
            name="subject"
            placeholder="Message subject"
            className={styles.subjectInput}
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
          />
        </div>

        {/* Message */}
        <div className={styles.formGroup}>
          <textarea
            name="message"
            placeholder="Message"
            className={styles.textarea}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <hr className={styles.divider} />

        <button type="submit" className={styles.submitBtn}>
          SEND
        </button>
      </form>
    </div>
    
   </div>  
  );
}
