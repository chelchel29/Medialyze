export type MILSkill =
  | "verification"
  | "criticalThinking"
  | "digitalSafety"
  | "aiAwareness"
  | "responsibleSharing";

export type SkillChanges = Partial<Record<MILSkill, number>>;

export type Choice = {
  id: string;
  text: string;

  nextNodeId: string;

  skillChanges?: SkillChanges;
};

export type ScenarioNodeType =
  | "story"
  | "decision"
  | "consequence"
  | "lesson"
  | "complete";

export type ScenarioNode = {
  id: string;

  type: ScenarioNodeType;

  title?: string;
  description?: string;

  choices?: Choice[];

  nextNodeId?: string;
};

export type Scenario = {
  id: string;

  number: number;

  title: string;
  subtitle: string;

  category: string;

  difficulty: "beginner" | "intermediate" | "advanced";

  description: string;

  nodes: ScenarioNode[];
};

export type MILScore = {
  verification: number;
  criticalThinking: number;
  digitalSafety: number;
  aiAwareness: number;
  responsibleSharing: number;
};

const initialScore: MILScore = {
  verification: 50,
  criticalThinking: 50,
  digitalSafety: 50,
  aiAwareness: 50,
  responsibleSharing: 50,
};