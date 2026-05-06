import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Rahul Meena",
    text: "All branded shoes are available here in one place. Quality is good and the price is reasonable. Very happy with my purchase."
  },
  {
    name: "Vikas Sharma",
    text: "Good quality and trendy design at a low price. Bassi me sabse best shop hai footwear ke liye."
  },
  {
    name: "Amit Singh",
    text: "Latest models available, service is very good. Bhaiya ka nature bahut accha hai. Highly recommend!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100/50 rounded-l-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-brand-black tracking-tight mb-4">
            Customer <span className="text-brand-red">Reviews</span>
          </h2>
          <p className="text-gray-600 text-lg">See what people in Bassi are saying about our quality and prices.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic flex-1">"{review.text}"</p>
              <div>
                <p className="font-bold text-brand-black">{review.name}</p>
                <p className="text-sm text-gray-500">Local Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
