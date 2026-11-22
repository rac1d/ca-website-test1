import { useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Loader2,
  Clock,
  Info,
} from 'lucide-react';
import { company, services } from '@/data/site';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success';

const serviceOptions = services.map((s) => s.title);

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!data.name.trim()) e.name = 'Please enter your name';
    if (!data.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = 'Please enter a valid email address';
    if (!data.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+]?[\d\s-]{8,15}$/.test(data.phone))
      e.phone = 'Please enter a valid phone number';
    if (!data.service) e.service = 'Please select a service';
    if (!data.message.trim()) e.message = 'Please tell us how we can help';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1400);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const resetForm = () => {
    setData({ name: '', email: '', phone: '', service: '', message: '' });
    setStatus('idle');
  };

  const fieldClass = (field: keyof FormData) =>
    `w-full rounded-xl border-2 bg-white px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 transition-colors focus:outline-none ${
      errors[field] ? 'border-red-400 focus:border-red-500' : 'border-border focus:border-primary'
    }`;

  return (
    <section id="contact" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left info */}
          <div>
            <p className="font-mono-display text-sm font-bold uppercase tracking-wider text-primary">
              / get in touch
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Let's talk about
              <br />
              your needs.
            </h2>
            <p className="mt-5 max-w-md font-inter text-lg leading-relaxed text-navy/65">
              Fill out the form and our team will get back to you within one
              business day.
            </p>

            <div className="mt-10 space-y-4">
              <a href={`mailto:${company.email}`} className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft border border-border transition-colors group-hover:bg-accent group-hover:border-accent">
                  <Mail className="h-5 w-5 text-primary transition-colors group-hover:text-navy" />
                </div>
                <div>
                  <p className="font-inter text-xs text-navy/50">Email</p>
                  <p className="font-grotesk text-base font-semibold text-navy">
                    {company.email}
                  </p>
                </div>
              </a>

              <a href={`tel:${company.phoneTel}`} className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft border border-border transition-colors group-hover:bg-accent group-hover:border-accent">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-inter text-xs text-navy/50">Phone</p>
                  <p className="font-grotesk text-base font-semibold text-navy">
                    {company.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft border border-border">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-inter text-xs text-navy/50">Office</p>
                  <p className="font-grotesk text-base font-semibold text-navy">
                    {company.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft border border-border">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-inter text-xs text-navy/50">Hours</p>
                  <p className="font-grotesk text-base font-semibold text-navy">
                    {company.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <div className="relative flex h-56 items-center justify-center bg-primary-soft grain">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(#0B1F3A20 1px, transparent 1px), linear-gradient(90deg, #0B1F3A20 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <MapPin className="h-10 w-10 text-primary" />
                  <p className="mt-2 font-grotesk text-sm font-bold text-navy">
                    {company.address}
                  </p>
                  <p className="font-inter text-xs text-navy/50">
                    Google Maps embed placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-3xl bg-white border border-border p-7 sm:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent">
                  <Check className="h-10 w-10 text-navy" strokeWidth={3} />
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold text-navy">
                  Message sent!
                </h3>
                <p className="mt-3 max-w-sm font-inter text-base text-navy/60">
                  Thanks, {data.name || 'there'}! This is a demo form, so no
                  message was actually sent — but in a live version we would
                  reply within one business day.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-grotesk text-sm font-bold text-primary transition-all hover:border-primary-hover hover:bg-primary hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Demo notice */}
                <div className="flex items-start gap-2.5 rounded-xl bg-primary-soft border border-primary/15 px-4 py-3">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="font-inter text-xs text-navy/70">
                    This is a demo contact form for demonstration purposes only.
                    Submissions are not sent to a real backend or email.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-grotesk text-sm font-bold text-navy">
                      Name
                    </label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                      className={fieldClass('name')}
                    />
                    {errors.name && (
                      <p className="mt-1.5 font-inter text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block font-grotesk text-sm font-bold text-navy">
                      Email
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@example.com"
                      className={fieldClass('email')}
                    />
                    {errors.email && (
                      <p className="mt-1.5 font-inter text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-grotesk text-sm font-bold text-navy">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className={fieldClass('phone')}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 font-inter text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block font-grotesk text-sm font-bold text-navy">
                      Service Required
                    </label>
                    <select
                      value={data.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={fieldClass('service')}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 font-inter text-xs text-red-500">{errors.service}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-grotesk text-sm font-bold text-navy">
                    Message
                  </label>
                  <textarea
                    value={data.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us a little about what you need help with..."
                    rows={4}
                    className={`${fieldClass('message')} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-inter text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-grotesk text-base font-bold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-primary-hover active:scale-95 disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-center font-inter text-xs text-navy/40">
                  Your information stays private. This form does not store or
                  transmit any data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
