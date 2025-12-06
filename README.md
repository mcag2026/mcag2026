# MCAG 2026 – Accessibility Guidelines Viewer

MCAG 2026 is a lightweight, data-driven website for browsing accessibility guidelines, including principles, criteria, issues, WCAG references, and expandable resource lists.  

This project intentionally separates structure, content, and logic:

- **`index.html`** → layout + Vue bindings  
- **`styles.css`** → all styles  
- **`js/data.js`** → data model (sections, criteria, issues)  
- **`js/app-index.js`** → Vue logic  

---

## 🧠 How Content Works

All displayed content (principles, criteria, issues) is defined in **`js/data.js`** as a single JavaScript array named `sections`.

Example structure:

```js
export const sections = [
  {
    id: "perceivable",
    navLabel: "1. Perceivable",
    heading: "1. Perceivable",
    intro: "Screen reader users must be able to know the information important to the app.",
    criteria: [
      {
        id: "content-label",
        navLabel: "a. Content Label",
        heading: "Guideline 1.1 Content Label",
        description: "...",
        issues: [
          {
            id: "1-1-1-missing-label",
            title: "Issue Type 1.1.1 Missing Label",
            summary: "...",
            references: [...],
            resources: [...]
          }
        ]
      }
    ]
  }
];

```

## ✏️ How to Add Content

### **1. Add a new principle (top-level page)**

In `data.js`, append a new object to the `sections` array:

```
{
  id: "understandable",
  navLabel: "3. Understandable",
  heading: "3. Understandable",
  intro: "Overview text...",
  criteria: [],
  placeholder: "Future content about Understandable."
}
```

This automatically appears in the sidebar and creates a new page.



### **2. Add a new criterion to a principle**

Inside a section’s `criteria` array:

```
{
  id: "readable",
  navLabel: "a. Readable",
  heading: "Guideline 3.1 Readable",
  description: "Makes content easier to understand.",
  issues: [],
  placeholder: "More content coming soon."
}
```

The sidebar and content area update automatically.



### **3. Add an issue to a criterion**

Inside a criterion’s `issues` array:

```
{
  id: "3-1-1-language-of-page",
  title: "Issue 3.1.1 Language of Page Missing",
  summary: "The main document language is not defined.",
  references: [
    { label: "3.1.1 Language of Page", url: "https://..." }
  ],
  resources: [
    {
      id: "res-testing-1",
      title: "Resources for testing",
      open: false,
      items: ["Check the <html lang> attribute...", "Use a screen reader..."]
    }
  ]
}
```

Vue renders it automatically—no HTML editing required.



## 4. Adding Expandable Resource Sections

Each issue may include collapsible resource groups:

```
resources: [
  {
    id: "res-testing",
    title: "Resources for testing",
    open: false,
    items: ["Example 1", "Example 2"]
  },
]
```

The expand/collapse behavior is handled automatically by Vue.
