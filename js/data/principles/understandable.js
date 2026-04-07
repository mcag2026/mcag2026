import { understandableContentPurposeIssueTypes } from "../guidelines/understandable/content-purpose.js";
import { understandableContentLocationIssueTypes } from "../guidelines/understandable/content-location.js";
import { understandableContentRelocationIssueTypes } from "../guidelines/understandable/content-relocation.js";

export const understandable = {
  id: "understandable",
  navLabel: "3. Understandable",
  heading: "3. Understandable",
  intro:
    "Screen reader users must be able to intuitively understand the operations and layout of the screen.",
  guidelines: [
    {
      id: "content-purpose",
      navLabel: "1. Content Purpose",
      heading: "Guideline 3.1. Content Purpose",
      description:
        "All interactive content must convey their operational purpose and requirements.",
      issueTypes: understandableContentPurposeIssueTypes,
    },
    {
      id: "content-location",
      navLabel: "2. Content Location",
      heading: "Guideline 3.2. Content Location",
      description:
        "The content must be located, through directional focus order, in an intuitive manner.",
      issueTypes: understandableContentLocationIssueTypes,
    },
    {
      id: "content-relocation",
      navLabel: "3. Content Reocation",
      heading: "Guideline 3.3. Content Relocation",
      description:
        "If content is removed, added or moved in the screen, the relocation information must be conveyed to the user.",
      issueTypes: understandableContentRelocationIssueTypes,
    },
  ],
};
