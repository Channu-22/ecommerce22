function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-rose-500 mb-6">About Us</h1>

        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-bold text-rose-400">Ecommerce</span> — your ultimate online shopping hub! We bring you top-quality products with unbeatable service, all in one place.
        </p>

        <p className="text-gray-700 mb-4">
          Launched in 2025, our mission is simple: make shopping effortless, fun, and reliable. From trending fashion to daily essentials, we’ve got it all.
        </p>

        <p className="text-gray-700 mb-4">
          We value your trust and strive to make every purchase a great experience. Your satisfaction is our priority.
        </p>

        <h2 className="text-2xl font-bold text-rose-500 mt-6 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Top-notch quality</li>
          <li>Customer-first approach</li>
          <li>Fast & reliable delivery</li>
          <li>Honesty in everything we do</li>
        </ul>

        <h2 className="text-2xl font-bold text-rose-500 mt-6 mb-4">Get in Touch</h2>
        <p className="text-gray-700">
          Got questions or feedback? We’re here for you! 📞{" "}
          <span className="font-bold">+91 93226 05251</span> <br />
          📧{" "}
          <a
            href="mailto:channusinnur22072002@gmail.com"
            className="text-blue-500 underline"
          >
            channusinnur22072002@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
