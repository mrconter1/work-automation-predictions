"use client";

import { useState } from "react";
import { jobPredictions } from "@/data/jobs";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JobGrid } from "@/components/job-grid";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobPredictions.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          <div className="space-y-8 flex flex-col items-center">
            <section className="w-full max-w-7xl">
              <div className="flex flex-col items-center mb-8">
                <h2 className="text-2xl font-semibold mb-6">Job Automation Predictions</h2>
                <SearchBar 
                  searchTerm={searchTerm} 
                  onSearchChange={(e) => setSearchTerm(e.target.value)} 
                />
              </div>
              {filteredJobs.length > 0 ? (
                <JobGrid jobs={filteredJobs} />
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No jobs found matching your search.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
