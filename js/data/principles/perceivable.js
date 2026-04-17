import { perceivableContentLabelIssueTypes } from "../guidelines/perceivable/content-label.js";
import { perceivableStateDescriptionIssueTypes } from "../guidelines/perceivable/state-description.js";
import { perceivableFocusableIssueTypes } from "../guidelines/perceivable/focusable.js";

export const perceivable = {
  id: "perceivable",
  navLabel: "1. Perceivable",
  heading: "1. Perceivable",
  intro:
    "Screen Reader users must be able to know the information important to the app.",
  guidelines: [
    {
      id: "content-label",
      navLabel: "1. Content Label",
      heading: "Guideline 1.1. Content Label",
      description:
        "All non-decorative content on screen must provide an alternative label that describes the presented (image) or expected (edit field) content.",
      issueTypes: perceivableContentLabelIssueTypes,
    },
    {
      id: "state-description",
      navLabel: "2. State Description",
      heading: "Guideline 1.2. State Description",
      description:
        "Content with multiple states must provide description about their current or changed state.",
      issueTypes: perceivableStateDescriptionIssueTypes,
    },
    {
      id: "focusable",
      navLabel: "3. Focusable",
      heading: "Guideline 1.3. Focusable",
      description:
        "All non-decorative content on screen must be focusable through swipe navigation on screen readers.",
      issueTypes: perceivableFocusableIssueTypes,
    },
  ],
};
