import type { Scenario } from "../../types/game";

export const viralTruthScenario: Scenario = {
  id: "viral-truth",

  number: 1,

  title: "Viral Truth",

  subtitle: "Can you separate fact from fiction?",

  category: "Misinformation",

  difficulty: "beginner",

  description:
    "A dramatic post is spreading across social media. What will you do?",

  nodes: [
    {
      id: "intro",

      type: "story",

      title: "Something is going viral",

      description:
        "You open social media and notice that many people are sharing the same breaking-news post.",

      nextNodeId: "first-decision",
    },

    {
      id: "first-decision",

      type: "decision",

      title: "What would you do?",

      choices: [
        {
          id: "share",

          text: "Share it with my friends",

          nextNodeId: "shared-consequence",

          skillChanges: {
            verification: -10,
            responsibleSharing: -10,
          },
        },

        {
          id: "check-source",

          text: "Check the original source",

          nextNodeId: "source-check",

          skillChanges: {
            verification: 10,
            criticalThinking: 5,
          },
        },
      ],
    },

    {
      id: "shared-consequence",

      type: "consequence",

      title: "The post spreads",

      description:
        "Several friends see your repost and some share it again. The claim later turns out to be misleading.",

      nextNodeId: "stop-lesson",
    },

    {
      id: "source-check",

      type: "consequence",

      title: "You investigate",

      description:
        "You discover that the post does not link to any reliable original source.",

      nextNodeId: "stop-lesson",
    },

    {
      id: "stop-lesson",

      type: "lesson",

      title: "STOP — Stop",

      description:
        "Before sharing surprising or emotional information, pause and check where it originally came from.",

      nextNodeId: "complete",
    },

    {
      id: "complete",

      type: "complete",

      title: "Challenge Complete",

      description:
        "You completed your first misinformation challenge.",
    },
  ],
};