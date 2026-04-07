import { robustCompatibleIssueTypes } from "../guidelines/robust/compatible.js";
import { robustConsistentIssueTypes } from "../guidelines/robust/consistent.js";

export const robust = {
  id: "robust",
  navLabel: "4. Robust",
  heading: "4. Robust",
  intro:
    "Screen reader users must be able to interpret all important content via screen reader.",
  guidelines: [
    {
      id: "compatible",
      navLabel: "1. Compatible",
      heading: "Guideline 4.1. Compatible",
      description:
        "The content must be compatible to screen readers, despite its underlying implementation.",
      issueTypes: robustCompatibleIssueTypes,
    },
    {
      id: "consistent",
      navLabel: "2. Consistent",
      heading: "Guideline 4.2. Consistent",
      description:
        "Content inaccessible to non-assisted user must not be accessible through screen reader.",
      issueTypes: robustConsistentIssueTypes,
    },
  ],
};
