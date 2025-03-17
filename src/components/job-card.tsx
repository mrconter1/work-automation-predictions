import { JobPrediction } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function JobCard({ job }: { job: JobPrediction }) {
  const isNil = (value: string | number | null) => 
    value === "Nil" || value === null;

  return (
    <Card className="h-full flex flex-col border-border">
      <CardHeader>
        <CardTitle className="text-xl">{job.title}</CardTitle>
        <CardDescription>
          {isNil(job.description) ? "No description available yet" : job.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Automation Timeframe:</span>
            <span className="text-sm">
              {isNil(job.automationTimeframeYears) 
                ? "Not specified" 
                : `${job.automationTimeframeYears} years`}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Prevalence in Sweden:</span>
            <Badge variant={isNil(job.prevalenceInSweden) ? "outline" : "default"}>
              {isNil(job.prevalenceInSweden) ? "Not specified" : job.prevalenceInSweden}
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Current Salary Level:</span>
            <Badge variant={isNil(job.currentSalaryLevel) ? "outline" : "secondary"}>
              {isNil(job.currentSalaryLevel) ? "Not specified" : job.currentSalaryLevel}
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Human Necessity:</span>
            <Badge variant={isNil(job.humanNecessity) ? "outline" : "destructive"}>
              {isNil(job.humanNecessity) ? "Not specified" : job.humanNecessity}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">View Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{job.title}</DialogTitle>
              <DialogDescription>
                {isNil(job.description) ? "No description available yet" : job.description}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <h4 className="font-medium">Automation Timeframe</h4>
                <p className="text-sm">
                  {isNil(job.automationTimeframeYears) 
                    ? "Not specified yet" 
                    : `Expected to be automated in approximately ${job.automationTimeframeYears} years.`}
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Prevalence in Sweden</h4>
                <p className="text-sm">
                  {isNil(job.prevalenceInSweden) 
                    ? "Not specified yet" 
                    : `This job has a ${job.prevalenceInSweden.toLowerCase()} prevalence in Sweden.`}
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Current Salary Level</h4>
                <p className="text-sm">
                  {isNil(job.currentSalaryLevel) 
                    ? "Not specified yet" 
                    : `This job currently has a ${job.currentSalaryLevel.toLowerCase()} salary level.`}
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Human Necessity</h4>
                <p className="text-sm">
                  {isNil(job.humanNecessity) 
                    ? "Not specified yet" 
                    : `The necessity for humans to perform this job is ${job.humanNecessity.toLowerCase()}.`}
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Automation Justification</h4>
                <p className="text-sm">
                  {isNil(job.automationJustification) 
                    ? "No justification available yet" 
                    : job.automationJustification}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
} 