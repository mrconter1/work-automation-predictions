export type PrevalenceLevel = "Very Low" | "Low" | "Medium" | "High" | "Very High" | "Nil";
export type SalaryLevel = "Very Low" | "Low" | "Medium" | "High" | "Very High" | "Nil";

export type JobPrediction = {
  title: string;
  description: string;
  automationTimeframeYears: number | null;
  prevalenceInSweden: PrevalenceLevel;
  currentSalaryLevel: SalaryLevel;
  automationJustification: string;
};

export const jobPredictions: JobPrediction[] = [
  {
    title: "Web Developer",
    description: "Nil",
    automationTimeframeYears: null,
    prevalenceInSweden: "Nil",
    currentSalaryLevel: "Nil",
    automationJustification: "Nil"
  },
  {
    title: "YouTuber",
    description: "Nil",
    automationTimeframeYears: null,
    prevalenceInSweden: "Nil",
    currentSalaryLevel: "Nil",
    automationJustification: "Nil"
  },
  {
    title: "Prosecutor",
    description: "Nil",
    automationTimeframeYears: null,
    prevalenceInSweden: "Nil",
    currentSalaryLevel: "Nil",
    automationJustification: "Nil"
  },
  {
    title: "Recycling Worker",
    description: "Nil",
    automationTimeframeYears: null,
    prevalenceInSweden: "Nil",
    currentSalaryLevel: "Nil",
    automationJustification: "Nil"
  },
  {
    title: "Translator",
    description: "Nil",
    automationTimeframeYears: null,
    prevalenceInSweden: "Nil",
    currentSalaryLevel: "Nil",
    automationJustification: "Nil"
  }
]; 