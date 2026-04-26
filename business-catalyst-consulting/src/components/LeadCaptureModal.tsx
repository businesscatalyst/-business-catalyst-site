import { useState, useEffect, FormEvent } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectUrl: string;
}

export default function LeadCaptureModal({ isOpen, onClose, redirectUrl }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', company: '', email: '', phone: '' });
    }
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate capturing lead
    console.log('Lead captured before scheduling:', formData);
    // Proceed to scheduling link
    window.open(redirectUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10"></div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">You're one step away</h3>
              <p className="text-slate-500 mb-6 font-light text-sm">
                Enter your details to proceed to the calendar and book your qualification call.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-6">
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Note:</strong> This is NOT a sales call. This is to understand if your business actually needs a structural diagnostic.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="lead-name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="lead-name" 
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="lead-company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    id="lead-company" 
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                    placeholder="Your Brand LLC"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className="block text-sm font-medium text-slate-700 mb-1">Professional Email</label>
                  <input 
                    type="email" 
                    id="lead-email" 
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                    placeholder="jane@yourbrand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="lead-phone" className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
                  <input 
                    type="tel" 
                    id="lead-phone" 
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-3.5 text-sm font-medium text-white shadow-md shadow-emerald-900/20 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all"
                  >
                    Continue to Booking
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4 leading-relaxed font-medium">
                    You’ll get a confirmation + next steps on WhatsApp/Email within 12 hours.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
