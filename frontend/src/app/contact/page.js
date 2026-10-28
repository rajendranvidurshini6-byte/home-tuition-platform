export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--background-soft)] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-[var(--navy-deep)] mb-6 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--navy-deep)]">Get in Touch</h2>
            <p className="text-[var(--text-light)]">If you have any questions about our classes, payments, or teacher verification, feel free to reach out.</p>
            <div className="pt-4 space-y-2">
              <p className="font-semibold text-[var(--navy-deep)]">📞 WhatsApp: +94 77 123 4567</p>
              <p className="font-semibold text-[var(--navy-deep)]">✉️ Email: hello@hometuition.lk</p>
              <p className="font-semibold text-[var(--navy-deep)]">📍 Location: Colombo, Sri Lanka</p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--navy-deep)] mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[var(--teal-primary)]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--navy-deep)] mb-1">Message</label>
              <textarea rows="3" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[var(--teal-primary)]"></textarea>
            </div>
            <button type="button" className="w-full btn-teal py-3">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}