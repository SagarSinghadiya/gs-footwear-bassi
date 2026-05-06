import { ShieldCheck, Clock, MessageCircle, Star } from 'lucide-react';

export default function TrustStrip() {
  const badges = [
    { icon: <Clock size={24} className="text-brand-red" />, title: "Open 7 Days", desc: "9:00 AM - 9:00 PM" },
    { icon: <ShieldCheck size={24} className="text-brand-red" />, title: "Original Brands", desc: "100% Genuine Quality" },
    { icon: <Star size={24} className="text-brand-red" />, title: "Latest Models", desc: "Trendy & Comfortable" },
    { icon: <MessageCircle size={24} className="text-brand-red" />, title: "WhatsApp Orders", desc: "Fast & Easy Booking" },
  ];

  return (
    <div className="bg-brand-navy text-white py-12 border-b-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 p-2">
              <div className="bg-white/10 p-3 rounded-full shrink-0">
                {badge.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg leading-tight mb-1">{badge.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
