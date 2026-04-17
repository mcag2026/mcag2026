/**
 * Central catalog of bibliography-style resources (name + citation + url).
 * Issue types reference `resourceGroups` ids so shared entries are not duplicated.
 */

/** @type {Record<string, { id: string, name: string, citation: string, url: string }>} */
export const resourceEntries = {
  "zhong2025screenaudit": {
    id: "zhong2025screenaudit",
    name: "ScreenAudit",
    citation: "Zhong, M., Chen, R., Chen, X., Fogarty, J., & Wobbrock, J. O. (2025, April). Screenaudit: Detecting screen reader accessibility errors in mobile apps using large language models. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (pp. 1-19).",
    url: "https://dl.acm.org/doi/full/10.1145/3706598.3713797"
  },
  "zhang2025scenario": {
    id: "zhang2025scenario",
    name: "A11yScan",
    citation: "Zhang, Y., Chen, S., Xie, X., Liu, Z., & Fan, L. (2025). Scenario-driven and context-aware automated accessibility testing for android apps.",
    url: "https://ink.library.smu.edu.sg/cgi/viewcontent.cgi?article=11331&context=sis_research"
  },
  "mehralian2024automated": {
    id: "mehralian2024automated",
    name: "TimeStump",
    citation: "Mehralian, F., He, Z., & Malek, S. (2025). Automated accessibility analysis of dynamic content changes on mobile apps.",
    url: "https://par.nsf.gov/servlets/purl/10618076"
  },
  "huq2024automated": {
    id: "huq2024automated",
    name: "Reca11",
    citation: "Huq, S. F., Tafreshipour, M., Kalcevich, K., & Malek, S. (2025). Automated generation of accessibility test reports from recorded user transcripts.",
    url: "https://par.nsf.gov/servlets/purl/10618080"
  },
  "zhang2025casgpt": {
    id: "zhang2025casgpt",
    name: "CasGPT",
    citation: "Zhang, M., Liu, H., Du, C., Wang, T., Li, H., Huang, P., & Chen, C. (2025). Distinguishing GUI Component States for Blind Users using Large Language Models. ACM Transactions on Software Engineering and Methodology, 34(8), 1-35.",
    url: "https://dl.acm.org/doi/full/10.1145/3722106"
  },
  "gu2025gift": {
    id: "gu2025gift",
    name: "GIFT",
    citation: "Gu, M., Pei, L., Zhou, S., Shen, M., Wu, Y., Gao, Z., ... & Bu, J. (2025, April). Towards an Inclusive Mobile Web: A Dataset and Framework for Focusability in UI Accessibility. In Proceedings of the ACM on Web Conference 2025 (pp. 5096-5107).",
    url: "https://dl.acm.org/doi/abs/10.1145/3696410.3714523"
  },
  "he2024tend": {
    id: "he2024tend",
    name: "AdMole",
    citation: "He, Z., Huq, S. F., & Malek, S. (2024, April). \" I tend to view ads almost like a pestilence\": On the Accessibility Implications of Mobile Ads for Blind Users. In Proceedings of the IEEE/ACM 46th International Conference on Software Engineering (pp. 1-13).",
    url: "https://dl.acm.org/doi/abs/10.1145/3597503.3639228"
  },
  "ma2023dark": {
    id: "ma2023dark",
    name: "Metila",
    citation: "Ma, Y., Yu, C., Yan, M., Sangaiah, A. K., & Wu, Y. (2023). Dark-side avoidance of mobile applications with data biases elimination in socio-cyber world. IEEE Transactions on Computational Social Systems, 11(4), 4955-4964.",
    url: "https://ieeexplore.ieee.org/abstract/document/10101862"
  },
  "liu2024hintdroid": {
    id: "liu2024hintdroid",
    name: "HintDroid",
    citation: "Liu, Z., Chen, C., Wang, J., Chen, M., Wu, B., Huang, Y., ... & Wang, Q. (2024, May). Unblind text inputs: predicting hint-text of text input in mobile apps via LLM. In Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (pp. 1-20).",
    url: "https://dl.acm.org/doi/full/10.1145/3613904.3642939"
  },
  "zhang2024rgnf": {
    id: "zhang2024rgnf",
    name: "RGNF",
    citation: "Zhang, M., Liu, H., Zhou, Y., Chen, C., Huang, P., & Zhao, J. (2024). Don’t Confuse! Redrawing GUI Navigation Flow in Mobile Apps for Visually Impaired Users. IEEE Transactions on Software Engineering, 50(12), 3351-3368.",
    url: "https://ieeexplore.ieee.org/abstract/document/10732009"
  },
  "swearngin2024report": {
    id: "swearngin2024report",
    name: "Swearngin 2024",
    citation: "Swearngin, A., Wu, J., Zhang, X., Gomez, E., Coughenour, J., Stukenborg, R., ... & Nichols, J. (2024). Towards automated accessibility report generation for mobile apps. ACM Transactions on Computer-Human Interaction, 31(4), 1-44.",
    url: "https://dl.acm.org/doi/full/10.1145/3674967"
  },
  "taeb2024axnav": {
    id: "taeb2024axnav",
    name: "AxNav",
    citation: "Taeb, M., Swearngin, A., Schoop, E., Cheng, R., Jiang, Y., & Nichols, J. (2024, May). Axnav: Replaying accessibility tests from natural language. In Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (pp. 1-16).",
    url: "https://dl.acm.org/doi/full/10.1145/3613904.3642777"
  },
  "salehnamadi2023assistive": {
    id: "salehnamadi2023assistive",
    name: "A11yPuppetry",
    citation: "Salehnamadi, N., He, Z., & Malek, S. (2023, April). Assistive-technology aided manual accessibility testing in mobile apps, powered by record-and-replay. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (pp. 1-20).",
    url: "https://dl.acm.org/doi/full/10.1145/3544548.3580679"
  },
  "garcia2023early": {
    id: "garcia2023early",
    name: "AATK",
    citation: "Garcia, A. C., de Lara, S. M. A., Duarte, L. M. C., Fortes, R. P. D. M., & Rodrigues, K. R. D. H. (2023, October). Early accessibility testing–an automated kit for Android developers. In Proceedings of the 29th Brazilian Symposium on Multimedia and the Web (pp. 11-15).",
    url: "https://dl.acm.org/doi/abs/10.1145/3617023.3617028"
  },
  "salehnamadi2022groundhog": {
    id: "salehnamadi2022groundhog",
    name: "GroundHog",
    citation: "Salehnamadi, N., Mehralian, F., & Malek, S. (2022, October). Groundhog: An automated accessibility crawler for mobile apps. In Proceedings of the 37th IEEE/ACM International Conference on Automated Software Engineering (pp. 1-12).",
    url: "https://dl.acm.org/doi/abs/10.1145/3551349.3556905"
  },
  "mehralian2022too": {
    id: "mehralian2022too",
    name: "OverSight",
    citation: "Mehralian, F., Salehnamadi, N., Huq, S. F., & Malek, S. (2022, October). Too much accessibility is harmful! automated detection and analysis of overly accessible elements in mobile apps. In Proceedings of the 37th IEEE/ACM International Conference on Automated Software Engineering (pp. 1-13).",
    url: "https://dl.acm.org/doi/abs/10.1145/3551349.3560424"
  },
  "chen2022towards": {
    id: "chen2022towards",
    name: "Chen 2022",
    citation: "Chen, J., Swearngin, A., Wu, J., Barik, T., Nichols, J., & Zhang, X. (2022, April). Towards complete icon labeling in mobile applications. In Proceedings of the 2022 CHI conference on human factors in computing systems (pp. 1-14).",
    url: "https://dl.acm.org/doi/abs/10.1145/3491102.3502073"
  },
  "chen2021accessible": {
    id: "chen2021accessible",
    name: "XBot",
    citation: "Chen, S., Chen, C., Fan, L., Fan, M., Zhan, X., & Liu, Y. (2021). Accessible or not? an empirical investigation of android app accessibility. IEEE Transactions on Software Engineering, 48(10), 3954-3968.",
    url: "https://ieeexplore.ieee.org/abstract/document/9525343/"
  },
  "alotaibi2022automated": {
    id: "alotaibi2022automated",
    name: "TIAF",
    citation: "Alotaibi, A. S., Chiou, P. T., & Halfond, W. G. (2022, April). Automated detection of talkback interactive accessibility failures in android applications. In 2022 IEEE Conference on Software Testing, Verification and Validation (ICST) (pp. 232-243). IEEE.",
    url: "https://ieeexplore.ieee.org/abstract/document/9787841"
  },
  "zhang2021screen": {
    id: "zhang2021screen",
    name: "Screen Recognition",
    citation: "Zhang, X., De Greef, L., Swearngin, A., White, S., Murray, K., Yu, L., ... & Bigham, J. P. (2021, May). Screen recognition: Creating accessibility metadata for mobile applications from pixels. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (pp. 1-15).",
    url: "https://dl.acm.org/doi/abs/10.1145/3411764.3445186"
  },
  "salehnamadi2021latte": {
    id: "salehnamadi2021latte",
    name: "Latte",
    citation: "Salehnamadi, N., Alshayban, A., Lin, J. W., Ahmed, I., Branham, S., & Malek, S. (2021, May). Latte: Use-case and assistive-service driven automated accessibility testing framework for android. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (pp. 1-11).",
    url: "https://dl.acm.org/doi/abs/10.1145/3411764.3445455"
  },
  "mehralian2021coala": {
    id: "mehralian2021coala",
    name: "COALA",
    citation: "Mehralian, F., Salehnamadi, N., & Malek, S. (2021, August). Data-driven accessibility repair revisited: on the effectiveness of generating labels for icons in Android apps. In Proceedings of the 29th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering (pp. 107-118).",
    url: "https://dl.acm.org/doi/abs/10.1145/3468264.3468604"
  },
  "alshayban2020accessibility": {
    id: "alshayban2020accessibility",
    name: "Alshayban 2020",
    citation: "Alshayban, A., Ahmed, I., & Malek, S. (2020, June). Accessibility issues in android apps: state of affairs, sentiments, and ways forward. In Proceedings of the ACM/IEEE 42nd International Conference on Software Engineering (pp. 1323-1334).",
    url: "https://dl.acm.org/doi/pdf/10.1145/3377811.3380392"
  },
  "ross2020epidemiology": {
    id: "ross2020epidemiology",
    name: "Ross 2020",
    citation: "Ross, A. S., Zhang, X., Fogarty, J., & Wobbrock, J. O. (2020). An epidemiology-inspired large-scale analysis of android app accessibility. ACM Transactions on Accessible Computing (TACCESS), 13(1), 1-36.",
    url: "https://dl.acm.org/doi/abs/10.1145/3348797"
  },
  "chen2020labeldroid": {
    id: "chen2020labeldroid",
    name: "LabelDroid",
    citation: "Li, Y., Li, G., He, L., Zheng, J., Li, H., & Guan, Z. (2020, November). Widget captioning: Generating natural language description for mobile user interface elements. In Proceedings of the 2020 conference on empirical methods in natural language processing (EMNLP) (pp. 5495-5510).",
    url: "https://dl.acm.org/doi/abs/10.1145/3377811.3380327"
  },
  "li2020widget": {
    id: "li2020widget",
    name: "Widget Captioning",
    citation: "Chen, J., Chen, C., Xing, Z., Xu, X., Zhu, L., Li, G., & Wang, J. (2020, June). Unblind your apps: Predicting natural-language labels for mobile gui components by deep learning. In Proceedings of the ACM/IEEE 42nd international conference on software engineering (pp. 322-334).",
    url: "https://aclanthology.org/2020.emnlp-main.443/"
  },
  "park2019development": {
    id: "park2019development",
    name: "Park 2019",
    citation: "Park, E., Han, S., Bae, H., Kim, R., Lee, S., Lim, D., & Lim, H. (2019, December). Development of automatic evaluation tool for mobile accessibility for android application. In 2019 International Conference on Systems of Collaboration Big Data, Internet of Things & Security (SysCoBIoTS) (pp. 1-6). IEEE.",
    url: "https://ieeexplore.ieee.org/abstract/document/9028034"
  },
  "zhang2018robust": {
    id: "zhang2018robust",
    name: "Zhang 2018",
    citation: "Zhang, X., Ross, A. S., & Fogarty, J. (2018, October). Robust annotation of mobile application interfaces in methods for accessibility repair and enhancement. In Proceedings of the 31st annual ACM symposium on user Interface software and technology (pp. 609-621).",
    url: "https://dl.acm.org/doi/abs/10.1145/3242587.3242616"
  },
  "eler2018automated": {
    id: "eler2018automated",
    name: "MATE",
    citation: "Eler, M. M., Rojas, J. M., Ge, Y., & Fraser, G. (2018, April). Automated accessibility testing of mobile apps. In 2018 IEEE 11th International Conference on Software Testing, Verification and Validation (ICST) (pp. 116-126). IEEE.",
    url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Automated+Accessibility+Testing+of+Mobile+Apps&btnG=#d=gs_cit&t=1775856912752&u=%2Fscholar%3Fq%3Dinfo%3Aut4BrWNmsqcJ%3Ascholar.google.com%2F%26output%3Dcite%26scirp%3D0%26hl%3Den"
  },
  "zhang2017interaction": {
    id: "zhang2017interaction",
    name: "Zhang 2017",
    citation: "Zhang, X., Ross, A. S., Caspi, A., Fogarty, J., & Wobbrock, J. O. (2017, May). Interaction proxies for runtime repair and enhancement of mobile application accessibility. In Proceedings of the 2017 CHI conference on human factors in computing systems (pp. 6024-6037).",
    url: "https://dl.acm.org/doi/abs/10.1145/3025453.3025846"
  },
  "de2017new": {
    id: "de2017new",
    name: "De Moura 2017",
    citation: "De Moura, C. J. M., De Oliveira, S., Faria, K. A. C., & de Andrade Freitas, E. N. (2017, December). A new API for android accessibility testing. In 2017 International Conference on Computational Science and Computational Intelligence (CSCI) (pp. 594-598). IEEE.",
    url: "https://ieeexplore.ieee.org/abstract/document/8560861"
  }
};

/** @type {Record<string, { id: string, title: string, resourceIds: string[] }>} */
export const resourceGroups = {
  "rg-1-1-1-testing": {
    id: "rg-1-1-1",
    title: "Resources",
    resourceIds: [
      "zhong2025screenaudit",
      "zhang2025scenario",
      "he2024tend",
      "salehnamadi2023assistive",
      "garcia2023early",
      "chen2021accessible",
      "alshayban2020accessibility",
      "ross2020epidemiology",
      "park2019development",
      "eler2018automated",
      "de2017new",
      "ma2023dark",
      "chen2022towards",
      "mehralian2021coala",
      "chen2020labeldroid",
      "zhang2018robust",
      "zhang2017interaction"
    ]
  },
  "rg-1-1-2-testing": {
    id: "rg-1-1-2",
    title: "Resources",
    resourceIds: [
      "zhang2025scenario",
      "salehnamadi2023assistive",
      "garcia2023early",
      "chen2021accessible",
      "alshayban2020accessibility",
      "ross2020epidemiology",
      "park2019development",
      "eler2018automated",
      "liu2024hintdroid"
    ]
  },
  "rg-1-1-3-testing": {
    id: "rg-1-1-3",
    title: "Resources",
    resourceIds: [
      "zhang2025scenario",
      "chen2021accessible",
      "alshayban2020accessibility",
      "ross2020epidemiology",
      "eler2018automated"
    ]
  },
  "rg-1-1-4-testing": {
    id: "rg-1-1-4",
    title: "Resources",
    resourceIds: [
      "zhong2025screenaudit",
      "zhang2025scenario",
      "chen2021accessible",
      "alshayban2020accessibility",
      "ross2020epidemiology"
    ]
  },
  "rg-1-1-5-testing": {
    id: "rg-1-1-5",
    title: "Resources",
    resourceIds: [
      "zhong2025screenaudit",
      "salehnamadi2023assistive",
      "zhang2018robust",
      "zhang2017interaction"
    ]
  },
  "rg-1-1-6-testing": {
    id: "rg-1-1-6",
    title: "Resources",
    resourceIds: [
      "zhong2025screenaudit",
      "zhang2025scenario",
      "chen2021accessible",
      "alshayban2020accessibility",
      "eler2018automated"
    ]
  },
  "rg-1-1-7-testing": {
    id: "rg-1-1-7",
    title: "Resources",
    resourceIds: [
      "zhang2025scenario",
      "chen2021accessible",
      "alshayban2020accessibility",
      "ross2020epidemiology",
      "zhang2018robust"
    ]
  },
  "rg-1-1-8-testing": {
    id: "rg-1-1-8",
    title: "Resources",
    resourceIds: [
      "salehnamadi2023assistive",
      "garcia2023early"
    ]
  },
  "rg-2-1-1-testing": {
    id: "rg-2-1-1",
    title: "Resources",
    resourceIds: [
      "gu2025gift",
      "he2024tend",
      "taeb2024axnav",
      "salehnamadi2023assistive",
      "salehnamadi2022groundhog",
      "alotaibi2022automated",
      "salehnamadi2021latte"
    ]
  },
  "rg-2-1-2-testing": {
    id: "rg-2-1-2",
    title: "Resources",
    resourceIds: [
      "taeb2024axnav",
      "salehnamadi2021latte",
      "alshayban2020accessibility"
    ]
  },
  "rg-2-1-3-testing": {
    id: "rg-2-1-3",
    title: "Resources",
    resourceIds: [
      "salehnamadi2022groundhog",
      "zhang2021screen",
      "zhang2018robust",
      "zhang2017interaction"
    ]
  },
  "rg-2-1-4-testing": {
    id: "rg-2-1-4",
    title: "Resources",
    resourceIds: [
      "zhang2024rgnf"
    ]
  },
  "rg-2-1-5-testing": {
    id: "rg-2-1-5",
    title: "Resources",
    resourceIds: [
      "he2024tend",
      "salehnamadi2022groundhog",
      "mehralian2022too",
      "salehnamadi2021latte",
      "zhang2021screen"
    ]
  },
  "rg-2-1-6-testing": {
    id: "rg-2-1-6",
    title: "Resources",
    resourceIds: [
      "salehnamadi2023assistive",
      "salehnamadi2021latte"
    ]
  },
  "rg-2-2-1-testing": {
    id: "rg-2-2-1",
    title: "Resources",
    resourceIds: [
      "he2024tend",
      "salehnamadi2023assistive",
      "salehnamadi2022groundhog"
    ]
  },
  "rg-2-2-2-testing": {
    id: "rg-2-2-2",
    title: "Resources",
    resourceIds: [
      "alshayban2020accessibility",
      "eler2018automated"
    ]
  },
  "rg-2-2-3-testing": {
    id: "rg-2-2-3",
    title: "Resources",
    resourceIds: [
      "mehralian2022too"
    ]
  },
  "rg-3-2-1-testing": {
    id: "rg-3-2-1",
    title: "Resources",
    resourceIds: [
      "mehralian2024automated"
    ]
  },
  "rg-3-2-2-testing": {
    id: "rg-3-2-2",
    title: "Resources",
    resourceIds: [
      "mehralian2024automated",
      "salehnamadi2022groundhog",
      "salehnamadi2021latte"
    ]
  },
  "rg-3-2-3-testing": {
    id: "rg-3-2-3",
    title: "Resources",
    resourceIds: [
      "mehralian2024automated"
    ]
  },
  "rg-3-2-4-testing": {
    id: "rg-3-2-4",
    title: "Resources",
    resourceIds: [
      "mehralian2024automated"
    ]
  },
  "rg-3-2-5-testing": {
    id: "rg-3-2-5",
    title: "Resources",
    resourceIds: [
      "mehralian2024automated",
      "zhang2025casgpt",
      "zhang2021screen"
    ]
  }
};
