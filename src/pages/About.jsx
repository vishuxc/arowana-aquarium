export default function About() {
  return (
    <div>

      {/* ✅ Full width banner */}
      <div className="w-full max-h-[380px] overflow-hidden shadow-lg">
        <img
          src="https://static.wixstatic.com/media/3fae33_b4e64beea88142ab8d2106489c70405d~mv2.png/v1/fill/w_640,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3fae33_b4e64beea88142ab8d2106489c70405d~mv2.png"
          alt="Arowana Aquarium"
          className="w-full object-cover"
        />
      </div>

      {/* ✅ Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Store title */}
        <h1 className="text-5xl font-extrabold text-sky-700 text-center mb-4 uppercase tracking-wide">
          Arowana Aquarium
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-center font-semibold text-gray-600 mb-10">
          Aquarium Fishes Retailer • SOBO Authorized Product Dealer
        </p>

        {/* Details Card */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">

          <p className="text-gray-800 leading-8 text-lg mb-6">
            <strong>Arowana Aquarium</strong> is a trusted store for freshwater ornamental fishes,
            premium aquarium accessories, and professional tank setup services. We are an
            authorized dealer and directly deal with <strong>SOBO branded aquarium products</strong>
            ensuring genuine quality at competitive pricing.
          </p>

          <h2 className="text-3xl font-bold text-sky-700 mt-6 mb-3">What We Do</h2>
          <ul className="list-disc ml-6 text-gray-800 text-lg leading-8">
            <li>Freshwater aquarium fish retail (Goldfish, Koi, Guppy, Betta & more)</li>
            <li>Complete aquarium setup for Home / Shops / Offices</li>
            <li>Musical fountains setup</li>
            <li>Maintenance & cleaning service</li>
            <li>Direct dealership of original SOBO accessories</li>
          </ul>

          <h2 className="text-3xl font-bold text-sky-700 mt-8 mb-3">Contact Us</h2>
          <p className="text-gray-800 text-lg leading-8">
            📞 <strong>94428 14613</strong> / <strong>99440 36513</strong><br />
            📍 127, Jambulingam Mudaliyar St., Block 2A,<br />
            Neyveli, Tamil Nadu – 607 801.
          </p>
        </div>
      </div>
    </div>
  );
}
