import { operableActionableIssueTypes } from "../guidelines/operable/actionable.js";
import { operableActionFeedbackIssueTypes } from "../guidelines/operable/action-feedback.js";
import { operableAlternativeInteractionIssueTypes } from "../guidelines/operable/alternative-interaction.js";

export const operable = {
  id: "operable",
  navLabel: "2. Operable",
  heading: "2. Operable",
  intro:
    "Screen reader users must be able to activate and understand the activation of interactions offered by the app.",
  guidelines: [
    {
      id: "actionable",
      navLabel: "1. Actionable",
      heading: "Guideline 2.1. Actionable",
      description: "All interactive elements can be activated by double-tap.",
      issueTypes: operableActionableIssueTypes,
    },
    {
      id: "action-feedback",
      navLabel: "2. Action Feedback",
      heading: "Guideline 2.2. Action Feedback",
      description: "The success or failure of an action must be properly announced.",
      issueTypes: operableActionFeedbackIssueTypes,
    },
    {
      id: "alternative-interaction",
      navLabel: "3. Alternative Interaction",
      heading: "Guideline 2.3. Alternative Interaction",
      description:
        "Interactions dependent on mechanism other than double-tap must be properly conveyed before and/or during action.",
      issueTypes: operableAlternativeInteractionIssueTypes,
    },
  ],
};
