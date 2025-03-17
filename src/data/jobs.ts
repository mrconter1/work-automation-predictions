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
    description: "Designs and develops websites and web applications using programming languages, frameworks, and design principles.",
    automationTimeframeYears: null,
    prevalenceInSweden: "High",
    currentSalaryLevel: "High",
    automationJustification: "Nil"
  },
  {
    title: "YouTuber",
    description: "Creates and publishes video content on YouTube, often building a personal brand and monetizing through ads, sponsorships, and merchandise.",
    automationTimeframeYears: null,
    prevalenceInSweden: "Low",
    currentSalaryLevel: "Medium",
    automationJustification: "Nil"
  },
  {
    title: "Prosecutor",
    description: "Represents the state in criminal proceedings, preparing and presenting cases against individuals accused of breaking the law.",
    automationTimeframeYears: null,
    prevalenceInSweden: "Medium",
    currentSalaryLevel: "High",
    automationJustification: "Nil"
  },
  {
    title: "Recycling Worker",
    description: "Sorts, processes, and manages recyclable materials at recycling facilities to prepare them for reuse.",
    automationTimeframeYears: null,
    prevalenceInSweden: "Medium",
    currentSalaryLevel: "Low",
    automationJustification: "Nil"
  },
  {
    title: "Translator",
    description: "Converts written or spoken content from one language to another while preserving meaning, context, and cultural nuances.",
    automationTimeframeYears: null,
    prevalenceInSweden: "Medium",
    currentSalaryLevel: "Medium",
    automationJustification: "Nil"
  }
]; 