// import React from "react";
//mption
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ci3g95e",
        "template_fr3ehi8",
        form.current,
        "gPyWtg1iOFZk0Kg-z"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("Error sending message. Please try again.");
        }
      );
  };
  return (
    <section className="py-20" name="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-start"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border round-2xl flex flex-col gap-y-6 pb-24 p-6 items-start "
          >
            <input
              required
              name="user_name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              required
              name="user_email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              required
              name="message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-noe mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg"> Send Message</button>
            {message && (
              <Alert variant="outlined" severity="success">
                Message sent successfully.
              </Alert>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
