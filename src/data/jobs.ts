export type PrevalenceLevel = "Very Low" | "Low" | "Medium" | "High" | "Very High" | "Nil";
export type SalaryLevel = "Very Low" | "Low" | "Medium" | "High" | "Very High" | "Nil";
export type HumanNecessityLevel = "Very Low" | "Low" | "Medium" | "High" | "Very High" | "Nil";

export type JobPrediction = {
  title: string;
  description: string;
  automationTimeframeYears: number | null;
  prevalenceInSweden: PrevalenceLevel;
  currentSalaryLevel: SalaryLevel;
  humanNecessity: HumanNecessityLevel;
  automationJustification: string;
};

export const jobPredictions: JobPrediction[] = [
  {
    title: "Web Developer",
    description: "Designs and develops websites and web applications using programming languages, frameworks, and design principles.",
    automationTimeframeYears: null,
    prevalenceInSweden: "High",
    currentSalaryLevel: "High",
    humanNecessity: "Low",
    automationJustification: "Nil"
  },
  {
    title: "YouTuber",
    description: "Creates and publishes video content on YouTube, often building a personal brand and monetizing through ads, sponsorships, and merchandise.",
    automationTimeframeYears: null,
    prevalenceInSweden: "Low",
    currentSalaryLevel: "Medium",
    humanNecessity: "Very High",
    automationJustification: "Nil"
  },
  {
    title: "Prosecutor",
    description: "Represents the state in criminal proceedings, preparing and presenting cases against individuals accused of breaking the law.",
    automationTimeframeYears: null,
    prevalenceInSweden: "Medium",
    currentSalaryLevel: "High",
    humanNecessity: "Very High",
    automationJustification: "Nil"
  },
  {
    title: "Recycling Worker",
    description: "Sorts, processes, and manages recyclable materials at recycling facilities to prepare them for reuse.",
    automationTimeframeYears: null,
    prevalenceInSweden: "Medium",
    currentSalaryLevel: "Low",
    humanNecessity: "Very Low",
    automationJustification: "Nil"
  },
  {
    title: "Translator",
    description: "Converts written or spoken content from one language to another while preserving meaning, context, and cultural nuances.",
    automationTimeframeYears: null,
    prevalenceInSweden: "Medium",
    currentSalaryLevel: "Medium",
    humanNecessity: "Medium",
    automationJustification: "Nil"
  }
]; 