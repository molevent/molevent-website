"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.project,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      setFormData({ name: "", email: "", project: "", message: "" });
      setShowModal(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-bg-dark text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 border-b border-gray-700 pb-6">
          <div>
            <div className="font-mono text-[10px] text-gray-500 tracking-widest mb-2">
              SECTION_005 // COMMUNICATION
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.9]">
              <span className="text-primary">/</span>CONTACT
            </h2>
          </div>
          <p className="font-mono text-sm text-gray-400 max-w-md">
            Initialize a connection. Send us your project parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <div className="font-mono text-[10px] text-primary tracking-widest mb-6">
              CONNECTION_DETAILS.SYS
            </div>

            <div className="flex flex-col gap-6">
              <div className="border border-gray-700 p-6 group hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  <span className="font-mono text-[10px] text-gray-500 tracking-widest">
                    EMAIL
                  </span>
                </div>
                <p className="font-bold text-lg">admin@molevent.tech</p>
              </div>

              <div className="border border-gray-700 p-6 group hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  <span className="font-mono text-[10px] text-gray-500 tracking-widest">
                    LOCATION
                  </span>
                </div>
                <p className="font-bold text-lg">Chiang Mai, Thailand</p>
                <p className="font-mono text-xs text-gray-500 mt-1">
                  OPERATING GLOBALLY // REMOTE-FIRST
                </p>
              </div>

              <div className="border border-gray-700 p-6 group hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <span className="font-mono text-[10px] text-gray-500 tracking-widest">
                    RESPONSE TIME
                  </span>
                </div>
                <p className="font-bold text-lg">&lt; 24 Hours</p>
                <p className="font-mono text-xs text-gray-500 mt-1">
                  AVERAGE RESPONSE: 4 HOURS
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              {["GITHUB", "LINKEDIN", "TWITTER"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="border border-gray-700 px-4 py-2 font-mono text-[10px] tracking-widest text-gray-500 hover:border-primary hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <div className="font-mono text-[10px] text-primary tracking-widest mb-6">
              MESSAGE_FORM.INPUT
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="font-mono text-[10px] text-gray-500 tracking-widest block mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border border-gray-700 px-4 py-3 text-white font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="ENTER_NAME"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-gray-500 tracking-widest block mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border border-gray-700 px-4 py-3 text-white font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="ENTER_EMAIL"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-gray-500 tracking-widest block mb-2">
                  PROJECT TYPE
                </label>
                <select
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  className="w-full bg-transparent border border-gray-700 px-4 py-3 text-white font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="" className="bg-bg-dark">SELECT_TYPE</option>
                  <option value="web" className="bg-bg-dark">WEB DEVELOPMENT</option>
                  <option value="cloud" className="bg-bg-dark">CLOUD ARCHITECTURE</option>
                  <option value="design" className="bg-bg-dark">UI/UX DESIGN</option>
                  <option value="api" className="bg-bg-dark">API & INTEGRATION</option>
                  <option value="other" className="bg-bg-dark">OTHER</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[10px] text-gray-500 tracking-widest block mb-2">
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border border-gray-700 px-4 py-3 text-white font-mono text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="DESCRIBE_YOUR_PROJECT..."
                />
              </div>

              {error && (
                <div className="border border-red-500 bg-red-500/10 p-4 text-center">
                  <p className="font-mono text-xs text-red-400">
                    ERROR: TRANSMISSION FAILED // PLEASE TRY AGAIN
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full border-2 border-primary bg-primary text-bg-dark hover:bg-transparent hover:text-primary transition-colors duration-200 px-8 py-4 font-black text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "TRANSMITTING..." : "TRANSMIT MESSAGE [→]"}
              </button>

              <p className="font-mono text-[10px] text-gray-600 text-center">
                ALL COMMUNICATIONS ARE ENCRYPTED // END-TO-END SECURE
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white text-black max-w-md w-full p-8 relative border-2 border-primary">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 font-mono text-sm text-gray-400 hover:text-black transition-colors"
            >
              [×]
            </button>

            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary mb-6 mx-auto">
              <span className="material-symbols-outlined text-primary text-4xl">
                check_circle
              </span>
            </div>

            {/* Title */}
            <h3 className="font-black text-2xl tracking-tight text-center mb-2">
              MESSAGE TRANSMITTED
            </h3>

            {/* Decorative line */}
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />

            {/* Description */}
            <p className="font-mono text-xs text-gray-500 text-center leading-relaxed mb-2">
              ข้อความของคุณถูกส่งเรียบร้อยแล้ว
            </p>
            <p className="font-mono text-xs text-gray-500 text-center leading-relaxed mb-6">
              ทางทีมงาน Molevent Tech จะติดต่อกลับโดยเร็วที่สุด
            </p>

            {/* Status info */}
            <div className="border border-gray-200 p-4 mb-6">
              <div className="flex justify-between font-mono text-[10px] text-gray-400 mb-1">
                <span>STATUS:</span>
                <span className="text-primary">DELIVERED</span>
              </div>
              <div className="flex justify-between font-mono text-[10px] text-gray-400 mb-1">
                <span>RESPONSE TIME:</span>
                <span>&lt; 24 HOURS</span>
              </div>
              <div className="flex justify-between font-mono text-[10px] text-gray-400">
                <span>DESTINATION:</span>
                <span>admin@molevent.tech</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full border-2 border-black bg-black text-white hover:bg-primary hover:border-primary transition-colors duration-200 px-6 py-3 font-black text-sm tracking-wide"
            >
              CLOSE [↵]
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
