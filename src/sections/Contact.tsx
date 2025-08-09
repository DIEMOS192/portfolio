// ContactSection: Simple contact / call-to-action block.
// TODO: Replace email and placeholder text with your real contact methods or a form.
export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {/* TODO: Insert a short friendly invitation to connect. */}
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open.
        </p>
        <a
          href="mailto:omertarek131@gmail.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
