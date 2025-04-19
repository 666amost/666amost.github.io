import React from 'react';

const Page: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero py-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Premium <span className="text-blue-600">Power Solutions</span> for Your Needs
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Specializing in high-quality stabilizers, transformers, and battery chargers to ensure reliable power for your home and business.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#products"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                >
                  Our Products
                </a>
                <a
                  href="#contact"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1606228281092-fbe4d9f4c0b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Power Solutions"
                className="rounded-xl shadow-xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex items-start">
              <div className="feature-icon w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mr-6">
                <i className="fas fa-bolt"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">High Quality</h3>
                <p className="text-gray-600">Our products are manufactured with premium materials and strict quality control.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex items-start">
              <div className="feature-icon w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mr-6">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Reliable Protection</h3>
                <p className="text-gray-600">Safeguard your equipment from voltage fluctuations and power surges.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex items-start">
              <div className="feature-icon w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mr-6">
                <i className="fas fa-headset"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Support</h3>
                <p className="text-gray-600">Our team provides professional advice and after-sales service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Products</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality power solutions for residential, commercial, and industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="product-card bg-white p-6 rounded-xl shadow-md">
              <div className="h-48 overflow-hidden rounded-lg mb-6">
                <img
                  src="https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Stabilizer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Voltage Stabilizers</h3>
              <p className="text-gray-600 mb-4">
                Automatic voltage regulators that maintain consistent power output despite input fluctuations.
              </p>
              <div className="flex justify-between items-center">
                <a href="#contact" className="text-blue-600 font-medium flex items-center">
                  Enquire Now <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">In Stock</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card bg-white p-6 rounded-xl shadow-md">
              <div className="h-48 overflow-hidden rounded-lg mb-6">
                <img
                  src="https://images.unsplash.com/photo-1603732551680-5b9988c6d769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Transformer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Transformers</h3>
              <p className="text-gray-600 mb-4">
                Efficient power transformers for voltage conversion in various industrial applications.
              </p>
              <div className="flex justify-between items-center">
                <a href="#contact" className="text-blue-600 font-medium flex items-center">
                  Enquire Now <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">In Stock</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card bg-white p-6 rounded-xl shadow-md">
              <div className="h-48 overflow-hidden rounded-lg mb-6">
                <img
                  src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Battery Charger"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Battery Chargers</h3>
              <p className="text-gray-600 mb-4">
                Intelligent charging systems for various battery types with protection features.
              </p>
              <div className="flex justify-between items-center">
                <a href="#contact" className="text-blue-600 font-medium flex items-center">
                  Enquire Now <i className="fas fa-arrow-right ml-2"></i>
                </a>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">In Stock</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#products"
              className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our Facility"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About <span className="text-blue-600">Denkyu Sinar Abadi</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Since our establishment, Denkyu Sinar Abadi has been committed to providing high-quality power solutions including stabilizers, transformers, and battery chargers to meet the growing demands of our customers.
              </p>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <p className="text-gray-700 font-medium">Over 10 years of industry experience</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <p className="text-gray-700 font-medium">Wide range of products for various applications</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <p className="text-gray-700 font-medium">Commitment to quality and customer satisfaction</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions to meet all your power needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-tools text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Product Customization</h3>
              <p className="text-gray-600 mb-4">
                We offer customized power solutions tailored to your specific requirements and applications.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-truck text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Nationwide Delivery</h3>
              <p className="text-gray-600 mb-4">
                Reliable delivery services across Indonesia to ensure your products arrive safely and on time.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Installation Support</h3>
              <p className="text-gray-600 mb-4">
                Professional installation services to ensure optimal performance of your power equipment.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-user-cog text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Support</h3>
              <p className="text-gray-600 mb-4">Expert technical assistance and troubleshooting for all our products.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Warranty Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive warranty coverage for all our products to give you peace of mind.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Consultation</h3>
              <p className="text-gray-600 mb-4">
                Professional advice to help you select the right power solutions for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Client <span className="text-blue-100">Testimonials</span>
            </h2>
            <p className="max-w-2xl mx-auto text-blue-100">What our customers say about our products and services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/budi.jpg" // Placeholder: Replace with actual Indonesian man photo
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Budi Santoso</h4>
                  <p className="text-blue-100 text-sm">Manajer Pabrik</p>
                </div>
              </div>
              <p className="text-blue-50">
                "Stabilizer industri yang kami beli dari Denkyu Sinar Abadi telah berjalan dengan sempurna selama lebih dari 2 tahun. Kualitas produk dan dukungan purna jual sangat baik."
              </p>
              <div className="flex mt-4">
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star-half-alt text-yellow-300"></i>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/dewi.jpg" // Placeholder: Replace with actual Indonesian woman photo
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Dewi Lestari</h4>
                  <p className="text-blue-100 text-sm">Pemilik Hotel</p>
                </div>
              </div>
              <p className="text-blue-50">
                "Kami telah menggunakan stabilizer tegangan dari Denkyu di semua cabang hotel kami. Ini telah mengurangi biaya perawatan peralatan kami secara signifikan. Sangat direkomendasikan!"
              </p>
              <div className="flex mt-4">
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star-half-alt text-yellow-300"></i>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/hendra.jpg" // Placeholder: Replace with actual Indonesian man photo
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Hendra Wijaya</h4>
                  <p className="text-blue-100 text-sm">Direktur Perusahaan IT</p>
                </div>
              </div>
              <p className="text-blue-50">
                "Sistem pengisian baterai yang kami beli untuk pusat data kami sangat andal. Tim dukungan teknis responsif dan berpengetahuan luas."
              </p>
              <div className="flex mt-4">
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300 mr-1"></i>
                <i className="fas fa-star text-yellow-300"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-600 text-white p-12">
                <h2 className="text-3xl font-bold mb-6">
                  Contact <span className="text-blue-100">Us</span>
                </h2>
                <p className="mb-8 text-blue-100">Have questions about our products or need a quote? Reach out to our team.</p>

                <div className="mb-6 flex items-start">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-blue-100">
                      Jl. Raya Cikarang - Cibarusah No. 27
                      <br />
                      Cikarang Selatan, Bekasi
                      <br />
                      Jawa Barat, Indonesia
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex items-start">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-blue-100">
                      info@denkyusinarabadi.com
                      <br />
                      sales@denkyusinarabadi.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-blue-100">
                      +62 21 1234 5678
                      <br />
                      Mon-Fri, 8am-5pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                <form id="contactForm" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">&copy; 2023 Denkyu Sinar Abadi. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;