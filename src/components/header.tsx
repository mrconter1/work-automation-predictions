export function Header() {
  return (
    <header className="py-6 md:py-10 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Work Automation Predictions
          </h1>
          <p className="text-muted-foreground">
            Exploring the future of work and automation across various professions in Sweden.
            When will different jobs be automated, and how will the job market evolve?
          </p>
        </div>
      </div>
    </header>
  );
} 