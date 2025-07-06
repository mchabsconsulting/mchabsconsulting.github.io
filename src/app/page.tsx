export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Chabs Consulting
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We deliver modern IT solutions — from cloud architecture to data analytics and AI. Partner with a team that understands innovation and execution.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
            <p>Design and deploy scalable, secure cloud environments on AWS, Azure, and more.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Data & Analytics</h3>
            <p>Unlock insights through modern data platforms, pipelines, and visualization tools.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">AI & LLM Solutions</h3>
            <p>Leverage machine learning and large language models to drive business automation and innovation.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <div className="max-w-xl mx-auto text-center bg-white p-6 rounded-lg shadow">
          <p className="text-lg mb-4">We’d love to hear from you.</p>
          <p className="text-gray-800 font-medium">
            📞 <a href="tel:+16132656635" className="text-blue-600 hover:underline">+1 (123) 456-7890</a>
          </p>
          <p className="text-gray-800 font-medium mt-2">
            📧 <a href="mailto:contact@chabsconsulting.ca" className="text-blue-600 hover:underline">contact@chabsconsulting.ca</a>
          </p>
        </div>
      </section>
    </main>
  );
}

