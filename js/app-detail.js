// js/app-detail.js
import { sections } from "./data.js";

const { createApp, ref, onMounted, nextTick } = Vue;

createApp({
  setup() {
    const section = ref(null);
    const guideline = ref(null);
    const sc = ref(null);

    // Read sc id from ?sc=...
    const params = new URLSearchParams(window.location.search);
    const scId = params.get("sc");

    if (scId) {
      for (const sec of sections) {
        for (const gl of sec.guidelines || []) {
          const match = (gl.successCriteria || []).find(
            (item) => item.id === scId
          );
          if (match) {
            section.value = sec;
            guideline.value = gl;
            sc.value = match;
            break;
          }
        }
        if (sc.value) break;
      }
    }

    // Normalize resources
    if (sc.value && Array.isArray(sc.value.resources)) {
      sc.value.resources = sc.value.resources.map((r) => ({
        open: r.open ?? false,
        ...r,
      }));
    }

    // Helper: choose highlight.js language class
    function codeLanguage(snippet) {
      const lang = snippet.language || snippet.label || "";
      const normalized = lang.toLowerCase();

      if (normalized.includes("kotlin")) return "language-kotlin";
      if (normalized.includes("java")) return "language-java";
      if (normalized.includes("html")) return "language-html";
      if (normalized.includes("javascript") || normalized.includes("js"))
        return "language-javascript";

      // fallback: no specific language
      return "";
    }

    onMounted(() => {
      // run syntax highlighting after Vue has rendered
      nextTick(() => {
        if (window.hljs) {
          window.hljs.highlightAll();
        }
      });
    });

    return {
      section,
      guideline,
      sc,
      codeLanguage,
    };
  },
}).mount("#app");

