export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-4 max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">
            Work Automation Predictions - Exploring the future of work in Sweden
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Work Automation Predictions
          </p>
        </div>
      </div>
    </footer>
  );
} 