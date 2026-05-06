import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-left mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-brand-black tracking-tight mb-4">
            Visit Us In <span className="text-brand-red">Bassi</span>
          </h2>
          <p className="text-gray-600 text-lg">Aapke local area me premium footwear shop.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          <div className="flex flex-col gap-8 w-full">
            <div className="bg-gray-50 p-8 rounded-3xl flex flex-col gap-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white p-3 rounded-full shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-black mb-1">Store Address</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Opposite Canara Bank, Bassi<br/>
                    Near Bidaji Ka Mandir,<br/>
                    New Low Floor Bus Stand,<br/>
                    Jaipur, Rajasthan 303301
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-200 w-full"></div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white p-3 rounded-full shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-black mb-1">Open Hours</h3>
                  <p className="text-gray-600 font-medium">Monday to Sunday<br/>9:00 AM – 9:00 PM</p>
                </div>
              </div>

              <div className="h-px bg-gray-200 w-full"></div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white p-3 rounded-full shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-black mb-1">Phone / WhatsApp</h3>
                  <p className="text-gray-600 font-medium text-lg">+91 80581 02782</p>
                </div>
              </div>
            </div>

            <a href="https://maps.google.com/?q=Canara+Bank+Bassi+Jaipur" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-brand-black hover:bg-gray-800 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-black/10 transition-all active:scale-95 group">
              <span>Get Directions</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-sm h-[400px] lg:h-[530px] border border-gray-100 flex items-center justify-center">
            {/* Embed Google Maps or functional placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113885.19504787968!2d75.98661649999999!3d26.837839399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ce22a16c1ec03%3A0xe4c3af4a8b79b29d!2sBassi%2C%20Rajasthan%20303301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
