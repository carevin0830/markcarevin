const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-muted-foreground">
            © {currentYear} Mark Carevin Daluson. All rights reserved.
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            Designed with passion and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
