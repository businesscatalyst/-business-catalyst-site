import { useState, FormEvent } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call to capture lead
    console.log('Newsletter lead captured:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '' });
    }, 5000);
  };

  return (
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 rounded-l-full blur-3xl -z-10 hidden md:block"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl bg-[#FAFAFA] border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 mb-5">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4 text-balance">
              Get High-Signal Amazon Growth Insights (No fluff)
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-balance">
              Get detailed teardowns on how established Amazon sellers fix margin compression and operational drag. Sent directly to your inbox.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">You're on the list</h3>
              <p className="text-emerald-700 font-light">We'll send our next structural diagnosis teardown directly to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nl-name" className="sr-only">Full Name</label>
                  <input 
                    type="text" 
                    id="nl-name" 
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="nl-company" className="sr-only">Company Name</label>
                  <input 
                    type="text" 
                    id="nl-company" 
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nl-email" className="sr-only">Email Address</label>
                  <input 
                    type="email" 
                    id="nl-email" 
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="nl-phone" className="sr-only">Contact Number</label>
                  <input 
                    type="tel" 
                    id="nl-phone" 
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                    placeholder="Contact Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center rounded-xl bg-slate-900 px-4 py-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                >
                  Subscribe to Updates
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              <p className="text-center text-xs text-slate-400 mt-4">
                We respect your inbox. No spam, just high-signal strategic insights.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
