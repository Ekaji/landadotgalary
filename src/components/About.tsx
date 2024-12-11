import  images  from '../data/images';

const About = () => {
  return (

    <div className="min-h-screen bg-gr ay-50 px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative w-full h-96 lg:h-full overflow-hidden rounded-lg shadow-md">
          <img
            src={images[0].url}
            alt="Photography Studio"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 lg:text-5xl">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to <span className="text-gray-800 font-semibold">Landadot Photography</span>, where passion for photography meets
            unparalleled creativity. Our journey began with a dream to capture the beauty of the world, one frame at a time.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From breathtaking landscapes to intimate portraits, we strive to create visual stories that resonate with your
            emotions. Our team of dedicated photographers and creative artists is here to turn moments into timeless memories.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-gray-800 text-white text-lg font-medium rounded-md shadow-md hover:bg-gray-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Values Section */}
      {/* <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Values</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Creativity", description: "Bringing fresh perspectives to every shot we take." },
            { title: "Passion", description: "Capturing moments with heartfelt dedication." },
            { title: "Quality", description: "Delivering outstanding imagery every single time." },
            { title: "Empathy", description: "Understanding the essence of each unique story." },
            { title: "Innovation", description: "Using the latest techniques to stay ahead." },
            { title: "Collaboration", description: "Building connections to create inspiring art." },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-gray-800 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default About;