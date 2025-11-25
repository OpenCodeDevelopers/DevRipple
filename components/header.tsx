import { CallToActionButton } from "./cta";

export const Header: React.FC = () => {
  return (
    <header className="py-4 border-b border-border/40 sticky top-0 z-10 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter text-foreground">
          Dev<span className="text-primary">Ripple</span>
        </h1>
        <nav className="hidden sm:flex space-x-6 text-sm">
          {/* Use standard <a> for section links to avoid full page load */}
          <a
            href="#features"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#workflow"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="#cta"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Join
          </a>
        </nav>
        <CallToActionButton
          href="/dashboard"
          variant="secondary"
          className="h-9 px-4 py-2"
        >
          Go to Dashboard
        </CallToActionButton>
      </div>
    </header>
  );
};
