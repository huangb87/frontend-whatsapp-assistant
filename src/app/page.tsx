import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-extrabold mb-4">Elevate Your Productivity</h1>
          <p className="text-lg mb-8">Experience seamless task management with our AI-powered WhatsApp assistant.</p>
          <a href="/register" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src="/file.svg" alt="Calendar" width={50} height={50} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Calendar Sync</h3>
              <p>Manage your schedule effortlessly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src="/globe.svg" alt="Email" width={50} height={50} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Integration</h3>
              <p>Stay on top of your inbox.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src="/window.svg" alt="Tasks" width={50} height={50} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Task Management</h3>
              <p>Organize your tasks efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex-1">
              <p className="mb-4">"This service has transformed how I manage my daily tasks. Highly recommend!"</p>
              <div className="flex items-center">
                <Image src="/file.svg" alt="User" width={40} height={40} className="rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex-1">
              <p className="mb-4">"A game-changer for productivity. Seamless and easy to use."</p>
              <div className="flex items-center">
                <Image src="/globe.svg" alt="User" width={40} height={40} className="rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-sm text-gray-600">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Us Today</h2>
          <a href="/register" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">Sign Up Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-400">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 WhatsApp Executive Assistant. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
