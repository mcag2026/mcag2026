// js/app-index.js
import { sections as allSections } from "./data.js";

const { createApp, ref, nextTick } = Vue;

createApp({
  setup() {
    const sections = ref(allSections);

    // Read ?section=... from URL, default to first section (Perceivable)
    const params = new URLSearchParams(window.location.search);
    const initialId = params.get("section") || sections.value[0].id;

    const section = ref(
      sections.value.find((s) => s.id === initialId) || sections.value[0]
    );

    function goSection(id) {
      // Update URL so you can link directly to a principle
      const url = new URL(window.location.href);
      url.searchParams.set("section", id);
      window.history.pushState({}, "", url.toString());

      section.value =
        sections.value.find((s) => s.id === id) || sections.value[0];

      // Scroll back to top when switching principle
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function scrollToGuideline(id) {
      nextTick(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    return {
      sections,
      section,
      goSection,
      scrollToGuideline,
    };
  },
}).mount("#app");
