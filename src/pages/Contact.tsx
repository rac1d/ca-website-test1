import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="/ contact us"
          title="Get in touch"
          subtitle="Have a question or ready to get started? Fill out the form below and our team will respond within one business day."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
