export const perceivableContentLabelIssueTypes = [
  {
    id: "1-1-1-missing-label",
    shortLabel: "1.1.1 Missing Label",
    title: "Issue Type 1.1.1 Missing Label",
    brief: "No alternative text for non-textual widgets.",
    definition: "No alternative text for non-textual widgets.",
    references: [
      {
        label: "1.1.1 Non-text Content",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
      },
      {
        label: "4.1.2 Name, Role, Value",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html",
      },
    ],

    // ---------- Issue Example ----------
    issueExample: {
      screenshotUrl: "images/MCAG 1.1.1 - missing label.png", // optional
      description: [
        "The Figure above contains an example of missing label. It shows a mock page of list items and an “Add button” with a plus icon in the bottom-right corner to add new items. It is an inaccessible button if not alternative label is provided to the button. While a sighted user can see the plus icon and guess its functionality, a screen reader user will only hear “unlabeled button”, receiving no indication to the button’s purpose and functionality.\n",
      ],
    },

    // ---------- Fix Suggestions ----------
    fixSuggestions: [
      {
        id: "fix-contentDescription",
        title: "Add 'contentDescription' attribute",
        category: "Static", // optional label
        // screenshotUrl: "images/1-1-1-fixed-aria-label.png", // optional
        description: [
          "In Android, you can add 'contentDescription' attribute to an ImageButton or FloatingActionButton instance, as exemplified in Listing below.",
        ],
        codeSnippets: [
          {
            label: "XML",
            code: `<com.google.android.material.floatingactionbutton.FloatingActionButton
    android:id="@+id/fabAdd"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:src="@drawable/ic_add"
    android:contentDescription="@string/desc_add_item" />
    
    
    Provided you include in res/values/strings.xml:
    <string name="desc_add_item">Add new item</string>
`,
          },
        ],
        subFixes: [
          {
            id: "fix-contentDescription-dynamic",
            title: "Add 'contentDescription' attribute",
            category: "Dynamic",
            screenshotUrl: "", // optional
            description: [
              "In Android, you can dynamically assign the 'contentDescription', as exemplified in Listing below",
            ],
            codeSnippets: [
              {
                label: "Kotlin",
                code: `val fab: FloatingActionButton = findViewById(R.id.fabAdd)
fab.contentDescription = getString(R.string.desc_add_item)


Provided you include in res/values/strings.xml:
<string name="desc_add_item">Add new item</string>
`,
              },
            ],
          },
        ],
      },
    ],

    resourceGroups: ["rg-1-1-1-testing", "rg-1-1-1-fixing"],
  },

  // ---------- 1.1.2 Missing Hint ----------
  {
    id: "1-1-2-missing-hint",
    shortLabel: "1.1.2 Missing Hint",
    title: "Issue Type 1.1.2 Missing Hint",
    brief: "No hint for input fields.",
    definition: "No hint for input fields.",
    references: [
      {
        label: "3.3.2 Labels or Instructions",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html",
      },
    ],

    // you can fill these later
    issueExample: {
      screenshotUrl: "images/MCAG 1.1.2 - missing hint.png", // optional
      description: [
        "The figure above contains an example of missing hint. It shows a mock Log-in page where the user needs to put in their Email and Password in the input fields. For sighted users, the labels “Email” and “Password” above the fields indicate the purpose of the following input field. However, if those labels are unfocusable by the screen reader and there is no hint within the input fields themselves, a screen reader user will only hear the announcement of a generic input field and would not know what value to put in.",
      ],
    },
    fixSuggestions: [
      {
        id: "focusable-labels",
        title: "Add focusable labels",
        category: "Static", // optional label
        screenshotUrl: "images/MCAG 1.1.2 - missing hint - fix 1.png", // optional
        description: [
          "One way to fix this issue is to have focusable labels for each input field, as shown in Fig above. \n" +
            "\n" +
            "In Android, you can add a text field and link it to the input field through the “labelFor” attribute, as exemplified for the Email field in Listing below.\n",
        ],
        codeSnippets: [
          {
            label: "XML",
            code: `<TextView
    android:id="@+id/emailLabel"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="@string/label_email" />

<EditText
    android:id="@+id/emailField"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:inputType="textEmailAddress"
    android:labelFor="@id/emailLabel" />


Provided you include in res/values/strings.xml:
<string name="label_email">Email</string>
`,
          },
        ],
      },
      {
        id: "hint-text",
        title: "Provide Hint Text",
        category: "Static", // optional label
        screenshotUrl: "images/MCAG 1.1.2 - missing hint - fix 2.png", // optional
        description: [
          "One way to fix this issue is to provide hint text in the input field. As shown in Fig right above, the input fields can be provided with hints “Email” and “Password”. There are two ways to do so: Static and Dynamic." +
            " In Android, you can add “hint” attribute to an input field, as exemplified for the Email field in Listing below.",
        ],
        codeSnippets: [
          {
            label: "XML",
            code: `<com.google.android.material.textfield.TextInputLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:hint="@string/hint_email">

<com.google.android.material.textfield.TextInputEditText
        android:id="@+id/inputEmail"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:inputType="textEmailAddress" />
</com.google.android.material.textfield.TextInputLayout>


Provided you include in res/values/strings.xml:
<string name="hint_email">Email</string>
`,
          },
        ],
        subFixes: [
          {
            id: "hint-text-dynamic",
            title: "Provide Hint Text",
            category: "Dynamic",
            // screenshotUrl: "", // optional
            description: [
              "In Android, you can programmatically assign the “hint”, as exemplified in Listing below.",
            ],
            codeSnippets: [
              {
                label: "Kotlin",
                code: `val emailField: EditText = findViewById(R.id.emailField)
emailField.hint = getString(R.string.hint_email)


Provided you include in res/values/strings.xml:
<string name="hint_email">Email</string>
`,
              },
            ],
          },
        ],
      },
    ],

    resourceGroups: ["rg-1-1-2-testing", "rg-1-1-2-fixing"],
  },
  {
    id: "1-1-3-editable-content-description",
    shortLabel: "1.1.3 Editable content description",
    title: "Issue Type 1.1.3 Editable content description",
    brief: "Input fields have their label in content description.",
  },
  {
    id: "1-1-4-redundant-description",
    shortLabel: "1.1.4 Redundant description",
    title: "Issue Type 1.1.4 Redundant description",
    brief: "Repeating the type or action hint of element in the label.",
  },
  {
    id: "1-1-5-inadequate-description",
    shortLabel: "1.1.5 Inadequate description",
    title: "Issue Type 1.1.5 Inadequate description",
    brief: "The label of an element provides incorrect or incomplete information.",
  },
  {
    id: "1-1-6-duplicate-labels",
    shortLabel: "1.1.6 Duplicate labels",
    title: "Issue Type 1.1.6 Duplicate labels",
    brief:
      "If more than one non-textual clickable widget on the same screen have the same label.",
  },
];
