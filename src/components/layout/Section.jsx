export const Section = ({ children, className = '', id, 'aria-labelledby': ariaLabelledby }) => {
  return (
    <section 
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`py-12 md:py-16 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
};
