import CoreValues from './CoreValues';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Happy Clients', value: '15,000+' },
  { label: 'Expert Staff', value: '30+' },
];

export default function About() {
  return (
    <>
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Om Estate Services</h2>
              <p className="text-gray-600 mb-8">
                At Om Estate Services, we specialize in making property document registration seamless
                and hassle-free. With over a decade of experience, our team of experts ensures your
                property transactions are legally sound and efficiently processed.
              </p>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To simplify property registration processes through expertise, technology, and customer-
                  centric service, ensuring peace of mind for all our clients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-2xl font-bold text-blue-500 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Interior"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Kitchen"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Keys"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <CoreValues />
    </>
  );
}