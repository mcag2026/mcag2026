// js/data.js
export const sections = [
  {
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
        successCriteria: [
          {
            id: "1-1-1-missing-label",
            shortLabel: "1.1.1 Missing Label",
            title: "Issue Type 1.1.1 Missing Label",
            brief: "No alternative text for non-textual widgets.",
            definition:
              "No alternative text for non-textual widgets.",
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
              }
            ],

            // ---------- Resources ----------
            resources: [
              {
                id: "res-testing-1",
                title: "Resources for testing",
                open: false,
                items: [
                  "Mingyuan Zhong, Ruolin Chen, Xia Chen, James Fogarty, and Jacob O Wobbrock. 2025. ScreenAudit: Detecting Screen Reader Accessibility Errors in Mobile Apps Using Large Language Models. CHI 2025.",
                  "Yuxin Zhang, Sen Chen, Xiaofei Xie, Zibo Liu, and Lingling Fan. 2025. Scenario-Driven and Context-Aware Automated Accessibility Testing for Android Apps. ICSE 2025.",
                  "Ziyao He, Syed Fatiul Huq, and Sam Malek. 2024. On the Accessibility Implications of Mobile Ads for Blind Users. ICSE 2024.",
                ],
              },
              {
                id: "res-fixing-1",
                title: "Resources for fixing",
                open: false,
                items: [
                  "Ying Ma, Chuyi Yu, Ming Yan, Arun Kumar Sangaiah, and Youke Wu. 2023. Dark-side avoidance of mobile applications with data biases elimination\n" +
                  "in socio-cyber world. IEEE Transactions on Computational Social Systems 11, 4 (2023), 4955–4964.",
                  "Jieshan Chen, Amanda Swearngin, Jason Wu, Titus Barik, Jeffrey Nichols, and Xiaoyi Zhang. 2022. Towards complete icon labeling in mobile\n" +
                  "applications. In Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems. 1–14.",
                    "Forough Mehralian, Navid Salehnamadi, and Sam Malek. 2021. Data-driven accessibility repair revisited: on the effectiveness of generating labels\n" +
                    "for icons in Android apps. In Proceedings of the 29th ACM Joint Meeting on European Software Engineering Conference and Symposium on the\n" +
                    "Foundations of Software Engineering (Athens, Greece) (ESEC/FSE 2021). Association for Computing Machinery, New York, NY, USA, 107–118.\n" +
                    "doi:10.1145/3468264.3468604"
                ],
              },
            ],
          },

          // ---------- 1.1.2 Missing Hint ----------
          {
            id: "1-1-2-missing-hint",
            shortLabel: "1.1.2 Missing Hint",
            title: "Issue Type 1.1.2 Missing Hint",
            brief: "No hint for input fields.",
            definition:
              "No hint for input fields.",
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
                ]
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
                }
            ],

            resources: [
              {
                id: "res-testing-2",
                title: "Resources for testing",
                open: false,
                items: [
                  "Yuxin Zhang, Sen Chen, Xiaofei Xie, Zibo Liu, and Lingling Fan. 2025. Scenario-Driven and Context-Aware Automated Accessibility Testing for\n" +
                  "Android Apps. In 2025 IEEE/ACM 47th International Conference on Software Engineering (ICSE). IEEE Computer Society, 630–630.",
                  "Navid Salehnamadi, Ziyao He, and Sam Malek. 2023. Assistive-technology aided manual accessibility testing in mobile apps, powered by\n" +
                  "record-and-replay. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems. 1–20.",
                    "Anderson Canale Garcia, Silvana Maria Affonso de Lara, Lianna Mara Castro Duarte, Renata Pontin de Mattos Fortes, and Kamila Rios Da Hora\n" +
                    "Rodrigues. 2023. Early accessibility testing–an automated kit for Android developers. In Proceedings of the 29th Brazilian Symposium on Multimedia\n" +
                    "and the Web. 11–15."
                ],
              },
              {
                id: "res-fixing-2",
                title: "Resources for fixing",
                open: false,
                items: [
                  "Zhe Liu, Chunyang Chen, Junjie Wang, Mengzhuo Chen, Boyu Wu, Yuekai Huang, Jun Hu, and Qing Wang. 2024. Unblind Text Inputs: Predicting\n" +
                  "Hint-text of Text Input in Mobile Apps via LLM. In Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (Honolulu, HI,\n" +
                  "USA) (CHI ’24). Association for Computing Machinery, New York, NY, USA, Article 51, 20 pages. doi:10.1145/3613904.3642939"
                ],
              },
            ],
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
					},{
						id: "1-1-6-duplicate-labels",
						shortLabel: "1.1.6 Duplicate labels",
						title: "Issue Type 1.1.6 Duplicate labels",
						brief: "If more than one non-textual clickable widget on the same screen have the same label.",
					},
        ],
      },
      {
        id: "state-description",
        navLabel: "2. State Description",
        heading: "Guideline 1.2. State Description",
        description:
          "Content with multiple states must provide description about their current or changed state.",
        successCriteria: [
          {
            id: "1-2-1-latent-content-modification",
            shortLabel: "1.2.1 Latent content modification",
            title: "Issue Type 1.2.1 Latent content modification",
            brief: "An element that remains on the screen but its attributes change without notifying screen reader",
          },
          {
            id: "1-2-2-changed-state-description",
            shortLabel: "1.2.2 Changed state description",
            title: "Issue Type 1.2.2 Changed state description",
            brief: "No change in alternative text if interactable widget changed its visual after user action.",
          },
        ],
      },
      {
        id: "focusable",
        navLabel: "3. Focusable",
        heading: "Guideline 1.3. Focusable",
        description:
          "All non-decorative content on screen must be focusable through swipe navigation on screen readers.",
        successCriteria: [
          {
            id: "1-3-1-unfocusable-interactive-element",
            shortLabel: "1.3.1 Unfocusable interactive element",
            title: "Issue Type 1.3.1 Unfocusable interactive element",
            brief: "When a screen reader cannot focus on an interactable element via swipe gestures.",
          },
          {
            id: "1-3-2-navigation loop",
            shortLabel: "1.3.2 Navigation Loop",
            title: "Issue Type 1.3.2 Navigation Loop",
            brief: "Cyclical navigation on a subset of UI elements causing elements outside the loop unreachable.",
          },
        ],
      },
    ],
  },
  {
    id: "operable",
    navLabel: "2. Operable",
    heading: "2. Operable",
    intro: "Screen reader users must be able to activate and understand the activation of interactions offered by the app.",
    guidelines: [
      {
        id: "actionable",
        navLabel: "1. Actionable",
        heading: "Guideline 2.1. Actionable",
        description:
          "All interactive elements can be activated by double-tap.",
        successCriteria: [
          {
						id: "2-1-1--ineffective-action",
						shortLabel: "2.1.1 Ineffective action",
						title: "Issue Type 2.1.1 Ineffective action",
						brief: "When screen reader is unable to perform an action with default double tapping.",
					},
          {
						id: "2-1-2-clickable-span",
						shortLabel: "2.1.2 Clickable span",
						title: "Issue Type 2.1.2 Clickable span",
						brief: "Text spans configured as clickable.",
					},
        ],
      },
      {
        id: "action-feedback",
        navLabel: "2. Action Feedback",
        heading: "Guideline 2.2. Action Feedback",
        description:
          "The success or failure of an action must be properly announced.",
        successCriteria: [
          {
						id: "2-2-1-no-action-feedback",
						shortLabel: "2.2.1 No action feedback",
						title: "Issue Type 2.2.1 No action feedback",
						brief: "No textual feedback is provided to convey the success or failure of an action.",
					},
        ],
      },
      {
        id: "alternative-interaction",
        navLabel: "3. Alternative Interaction",
        heading: "Guideline 2.3. Alternative Interaction",
        description:
          "Interactions dependent on mechanism other than double-tap must be properly conveyed before and/or during action.",
        successCriteria: [
          {
						id: "2-3-1-inadequate-progress-indication",
						shortLabel: "2.3.1 Inadequate progress indication",
						title: "Issue Type 2.3.1 Inadequate progress indication",
						brief: "For dynamically operable elements, no information is provided to indicate progress.",
					},
          {
						id: "2-3-2-latent-content-modification",
						shortLabel: "2.3.2 Latent content modification",
						title: "Issue Type 2.3.2 Latent content modification",
						brief: "An element that remains on the screen but its attributes change.",
					},
        ],
      },
    ]
  },
  {
    id: "understandable",
    navLabel: "3. Understandable",
    heading: "3. Understandable",
    intro: "Screen reader users must be able to intuitively understand the operations and layout of the screen.",
    guidelines: [
      {
        id: "content-purpose",
        navLabel: "1. Content Purpose",
        heading: "Guideline 3.1. Content Purpose",
        description:
          "All interactive content must convey their operational purpose and requirements.",
        successCriteria: [
          {
						id: "3-1-1-inadequate-description",
						shortLabel: "3.1.1 Inadequate description",
						title: "Issue Type 3.1.1 Inadequate description",
						brief: "The label of an element provides incorrect or incomplete information.",
					},
          {
						id: "3-1-2-unsupported-class-name",
						shortLabel: "3.1.2 Unsupported class name",
						title: "Issue Type 3.1.2 Unsupported class name",
						brief: "A custom View that does not provide the type of elements to screen reader.",
					},
        ],
      },
      {
        id: "content-location",
        navLabel: "2. Content Location",
        heading: "Guideline 3.2. Content Location",
        description:
          "The content must be located, through directional focus order, in an intuitive manner.",
        successCriteria: [
          {
						id: "3-2-1-unnatural-navigation-order",
						shortLabel: "3.2.1 Unnatural navigation order",
						title: "Issue Type 3.2.1 Unnatural navigation order",
						brief: "Where directional navigation does not follow a logical order.",
					},
          {
						id: "3-2-2-unapparent-focus-switching",
						shortLabel: "3.2.2 Unapparent focus switching",
						title: "Issue Type 3.2.2 Unapparent focus switching",
						brief: "Sudden changes in navigation sequence direction.",
					},
        ],
      },
      {
        id: "content-relocation",
        navLabel: "3. Content Reocation",
        heading: "Guideline 3.3. Content Relocation",
        description:
          "If content is removed, added or moved in the screen, the relocation information must be conveyed to the user.",
        successCriteria: [
          {
						id: "3-3-1-latent-appearing-content",
						shortLabel: "3.3.1 Latent appearing content",
						title: "Issue Type 3.3.1 Latent appearing content",
						brief: "An element that initially is not present on a loaded window, but appears a few moments later and remains on the screen.",
					},
          {
						id: "3-3-2-latent-disappearing-content",
						shortLabel: "3.3.2 Latent disappearing content",
						title: "Issue Type 3.3.2 Latent disappearing content",
						brief: "An element that disappears either after a set period or as a result of user interaction.",
					},
        ],
      },
    ]
  },
  {
    id: "Robust",
    navLabel: "4. Robust",
    heading: "4. Robust",
    intro: "Screen reader users must be able to interpret all important content via screen reader.",
    guidelines: [
      {
        id: "compatible",
        navLabel: "1. Compatible",
        heading: "Guideline 4.1. Compatible",
        description:
          "The content must be compatible to screen readers, despite its underlying implementation.",
        successCriteria: [
          {
            id: "4-1-1-unfocusable-interactive-element",
            shortLabel: "4.1.1 Unfocusable interactive element",
            title: "Issue Type 4.1.1 Unfocusable interactive element",
            brief: "When a screen reader cannot focus on an interactable element via swipe gestures.",
          },
          {
						id: "4-1-2--ineffective-action",
						shortLabel: "4.1.2 Ineffective action",
						title: "Issue Type 4.1.2 Ineffective action",
						brief: "When screen reader is unable to perform an action with default double tapping.",
					},
        ],
      },
      {
        id: "consistent",
        navLabel: "2. Consistent",
        heading: "Guideline 4.2. Consistent",
        description:
          "Content inaccessible to non-assisted user must not be accessible through screen reader.",
        successCriteria: [
          {
						id: "4-2-1-overly-actionable",
						shortLabel: "4.2.1 Overly actionable",
						title: "Issue Type 4.2.1 Overly actionable",
						brief: "Elements that expose action to screen reader, otherwise invisible on screen.",
					},
        ],
      },
    ]
  },
];
