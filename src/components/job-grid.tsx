import { JobPrediction } from "@/data/jobs";
import { JobCard } from "@/components/job-card";

export function JobGrid({ jobs }: { jobs: JobPrediction[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl w-full">
      {jobs.map((job) => (
        <JobCard key={job.title} job={job} />
      ))}
    </div>
  );
} 