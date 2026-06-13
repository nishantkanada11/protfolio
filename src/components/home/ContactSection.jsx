import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import Container from "../common/Container";
import Button from "../common/Button";
import ContactCard from "./ContactCard";

import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactSection = () => {

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    setLoading(true);

    try {

await emailjs.send(

  import.meta.env.VITE_EMAILJS_SERVICE_ID,

  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

  {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
  },

  import.meta.env.VITE_EMAILJS_PUBLIC_KEY

);

      toast.success("Message Sent Successfully 🚀");

      reset();

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong!");

    }

    setLoading(false);

  };

  return (

    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >

      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div

            initial={{ opacity: 0, x: -60 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

          >

            <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-600">

              CONTACT ME

            </span>

            <h2 className="mt-6 text-5xl font-black dark:text-white">

              Let's Build

              <span className="text-violet-600">

                {" "}Something Great

              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-500">

              Have a project in mind?

              Let's discuss your ideas

              and create something amazing together.

            </p>

            <div className="mt-10 space-y-5">

              <ContactCard

                icon={FiMail}

                title="Email"

                value="nishantkanada@gmail.com"

                href="mailto:nishantkanada@gmail.com"

                delay={0.1}

              />

              <ContactCard

                icon={FiPhone}

                title="Phone"

                value="+91 9429269495"

                href="tel:+919429269495"

                delay={0.2}

              />

              <ContactCard

                icon={FiMapPin}

                title="Location"

                value="Ahmedabad, Gujarat"

                href="#"

                delay={0.3}

              />

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div

            initial={{ opacity: 0, x: 60 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            className="rounded-[36px] border border-zinc-200 bg-white/80 p-10 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80"

          >

            <form

              onSubmit={handleSubmit(onSubmit)}

              className="space-y-6"

            >
                            {/* Name */}

              <div>

                <input

                  type="text"

                  placeholder="Your Name"

                  {...register("name",{
                    required:"Name is required"
                  })}

                  className="w-full rounded-2xl border border-zinc-300 bg-transparent px-5 py-4 outline-none transition-all focus:border-violet-500 dark:border-zinc-700"

                />

                {

                  errors.name && (

                    <p className="mt-2 text-sm text-red-500">

                      {errors.name.message}

                    </p>

                  )

                }

              </div>

              {/* Email */}

              <div>

                <input

                  type="email"

                  placeholder="Email Address"

                  {...register("email",{

                    required:"Email is required",

                    pattern:{

                      value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                      message:"Please enter a valid email"

                    }

                  })}

                  className="w-full rounded-2xl border border-zinc-300 bg-transparent px-5 py-4 outline-none transition-all focus:border-violet-500 dark:border-zinc-700"

                />

                {

                  errors.email && (

                    <p className="mt-2 text-sm text-red-500">

                      {errors.email.message}

                    </p>

                  )

                }

              </div>

              {/* Subject */}

              <div>

                <input

                  type="text"

                  placeholder="Subject"

                  {...register("subject",{

                    required:"Subject is required"

                  })}

                  className="w-full rounded-2xl border border-zinc-300 bg-transparent px-5 py-4 outline-none transition-all focus:border-violet-500 dark:border-zinc-700"

                />

                {

                  errors.subject && (

                    <p className="mt-2 text-sm text-red-500">

                      {errors.subject.message}

                    </p>

                  )

                }

              </div>

              {/* Message */}

              <div>

                <textarea

                  rows="6"

                  placeholder="Tell me about your project..."

                  {...register("message",{

                    required:"Message is required",

                    minLength:{

                      value:10,

                      message:"Message should be at least 10 characters"

                    }

                  })}

                  className="w-full resize-none rounded-2xl border border-zinc-300 bg-transparent px-5 py-4 outline-none transition-all focus:border-violet-500 dark:border-zinc-700"

                />

                {

                  errors.message && (

                    <p className="mt-2 text-sm text-red-500">

                      {errors.message.message}

                    </p>

                  )

                }

              </div>

              <Button

                type="submit"

                className="min-w-[180px]"

              >

                {

                  loading

                    ? "Sending..."

                    : "Send Message 🚀"

                }

              </Button>
                          </form>

          </motion.div>

        </div>

      </Container>

    </section>

  );

};

export default ContactSection;