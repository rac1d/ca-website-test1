type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = 'left',
}: Props) {
  return (
    <div
      className={`max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : ''
      }`}
    >
      <p
        className={`font-mono-display text-sm font-bold uppercase tracking-wider ${
          dark ? 'text-gold' : 'text-gold-dark'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl ${
          dark ? 'text-cream' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 font-inter text-lg leading-relaxed ${
            dark ? 'text-cream/60' : 'text-navy/65'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
