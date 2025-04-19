import Image from "next/image";

const testimonials = [
  {
    quote: "A terrific piece of praise",
    name: "Name",
    description: "Description",
    avatar: "/avatars/user1.jpg", // Replace with your actual image paths
  },
  {
    quote: "A fantastic bit of feedback",
    name: "Name",
    description: "Description",
    avatar: "/avatars/user2.jpg",
  },
  {
    quote: "A genuinely glowing review",
    name: "Name",
    description: "Description",
    avatar: "/avatars/user3.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#E4D2B9] py-12 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-serif">
        Hear about our products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
          >
            <p className="text-lg font-medium mb-6">“{testimonial.quote}”</p>

            <div className="flex items-center gap-3">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
