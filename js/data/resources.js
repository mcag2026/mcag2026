/**
 * Central catalog of bibliography-style resources (title + url).
 * Issue types reference `resourceGroups` ids so shared entries are not duplicated.
 */

export const resourceEntries = {
  "res-screenaudit-chi2025": {
    id: "res-screenaudit-chi2025",
    title:
      "Mingyuan Zhong, Ruolin Chen, Xia Chen, James Fogarty, and Jacob O Wobbrock. 2025. ScreenAudit: Detecting Screen Reader Accessibility Errors in Mobile Apps Using Large Language Models. CHI 2025.",
    url: "https://dl.acm.org/doi/full/10.1145/3706598.3713797",
  },
  "res-zhang-icse2025-scenario": {
    id: "res-zhang-icse2025-scenario",
    title:
      "Yuxin Zhang, Sen Chen, Xiaofei Xie, Zibo Liu, and Lingling Fan. 2025. Scenario-Driven and Context-Aware Automated Accessibility Testing for Android Apps. ICSE 2025.",
    url: "https://ink.library.smu.edu.sg/sis_research/10330/",
  },
  "res-he-icse2024-ads": {
    id: "res-he-icse2024-ads",
    title:
      "Ziyao He, Syed Fatiul Huq, and Sam Malek. 2024. On the Accessibility Implications of Mobile Ads for Blind Users. ICSE 2024.",
    url: "",
  },
  "res-ma-tcss2023": {
    id: "res-ma-tcss2023",
    title:
      "Ying Ma, Chuyi Yu, Ming Yan, Arun Kumar Sangaiah, and Youke Wu. 2023. Dark-side avoidance of mobile applications with data biases elimination in socio-cyber world. IEEE Transactions on Computational Social Systems 11, 4 (2023), 4955–4964.",
    url: "",
  },
  "res-chen-chi2022-icons": {
    id: "res-chen-chi2022-icons",
    title:
      "Jieshan Chen, Amanda Swearngin, Jason Wu, Titus Barik, Jeffrey Nichols, and Xiaoyi Zhang. 2022. Towards complete icon labeling in mobile applications. In Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems. 1–14.",
    url: "",
  },
  "res-mehralian-esecfse2021": {
    id: "res-mehralian-esecfse2021",
    title:
      "Forough Mehralian, Navid Salehnamadi, and Sam Malek. 2021. Data-driven accessibility repair revisited: on the effectiveness of generating labels for icons in Android apps. In Proceedings of the 29th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering (Athens, Greece) (ESEC/FSE 2021). Association for Computing Machinery, New York, NY, USA, 107–118.",
    url: "https://doi.org/10.1145/3468264.3468604",
  },
  "res-salehnamadi-chi2023": {
    id: "res-salehnamadi-chi2023",
    title:
      "Navid Salehnamadi, Ziyao He, and Sam Malek. 2023. Assistive-technology aided manual accessibility testing in mobile apps, powered by record-and-replay. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems. 1–20.",
    url: "",
  },
  "res-garcia-webmedia2023": {
    id: "res-garcia-webmedia2023",
    title:
      "Anderson Canale Garcia, Silvana Maria Affonso de Lara, Lianna Mara Castro Duarte, Renata Pontin de Mattos Fortes, and Kamila Rios Da Hora Rodrigues. 2023. Early accessibility testing–an automated kit for Android developers. In Proceedings of the 29th Brazilian Symposium on Multimedia and the Web. 11–15.",
    url: "",
  },
  "res-liu-chi2024-unblind": {
    id: "res-liu-chi2024-unblind",
    title:
      "Zhe Liu, Chunyang Chen, Junjie Wang, Mengzhuo Chen, Boyu Wu, Yuekai Huang, Jun Hu, and Qing Wang. 2024. Unblind Text Inputs: Predicting Hint-text of Text Input in Mobile Apps via LLM. In Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (Honolulu, HI, USA) (CHI ’24). Association for Computing Machinery, New York, NY, USA, Article 51, 20 pages.",
    url: "https://doi.org/10.1145/3613904.3642939",
  },
};

/** @type {Record<string, { id: string, title: string, resourceIds: string[] }>} */
export const resourceGroups = {
  "rg-1-1-1-testing": {
    id: "rg-1-1-1-testing",
    title: "Resources for testing",
    resourceIds: [
      "res-screenaudit-chi2025",
      "res-zhang-icse2025-scenario",
      "res-he-icse2024-ads",
    ],
  },
  "rg-1-1-1-fixing": {
    id: "rg-1-1-1-fixing",
    title: "Resources for fixing",
    resourceIds: [
      "res-ma-tcss2023",
      "res-chen-chi2022-icons",
      "res-mehralian-esecfse2021",
    ],
  },
  "rg-1-1-2-testing": {
    id: "rg-1-1-2-testing",
    title: "Resources for testing",
    resourceIds: [
      "res-zhang-icse2025-scenario",
      "res-salehnamadi-chi2023",
      "res-garcia-webmedia2023",
    ],
  },
  "rg-1-1-2-fixing": {
    id: "rg-1-1-2-fixing",
    title: "Resources for fixing",
    resourceIds: ["res-liu-chi2024-unblind"],
  },
};
