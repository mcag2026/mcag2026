// js/app-detail.js
import { sections } from "./data.js";
import { resourceEntries, resourceGroups } from "./data/resources.js";

const { createApp, ref, computed, onMounted, onBeforeUnmount, nextTick } = Vue;

function buildResolvedResourceSections(type) {
  const ids = type?.resourceGroups;
  if (!ids?.length) return [];

  return ids
    .map((groupId) => {
      const group = resourceGroups[groupId];
      if (!group) return null;

      const items = (group.resourceIds || [])
        .map((rid) => resourceEntries[rid])
        .filter(Boolean);

      if (!items.length) return null;

      return {
        id: group.id,
        title: group.title,
        items,
      };
    })
    .filter(Boolean);
}

createApp({
  setup() {
    const section = ref(null);
    const guideline = ref(null);
    const issueType = ref(null);

    const tocSections = [
      { id: "definition", label: "Definition" },
      { id: "wcag-reference", label: "WCAG Reference" },
      { id: "issue-example", label: "Issue Example" },
      { id: "android-fix-suggestion", label: "Android Fix Suggestion" },
      { id: "resources", label: "Resources" },
    ];

    const activeSectionId = ref(tocSections[0]?.id ?? null);

    // Read issue type id from query params.
    const params = new URLSearchParams(window.location.search);
    // Backwards-compat: keep ?sc= working
    const issueTypeId = params.get("issueType") || params.get("sc");

    if (issueTypeId) {
      for (const sec of sections) {
        for (const gl of sec.guidelines || []) {
          const match = (gl.issueTypes || []).find((item) => item.id === issueTypeId);
          if (match) {
            section.value = sec;
            guideline.value = gl;
            issueType.value = match;
            break;
          }
        }
        if (issueType.value) break;
      }
    }

    const resolvedResourceSections = computed(() =>
      buildResolvedResourceSections(issueType.value)
    );

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

    function normalizeHash(hash) {
      return (hash || "").replace(/^#/, "");
    }

    function scrollAndFocusSection(id, { behavior = "smooth" } = {}) {
      if (!id) return;

      nextTick(() => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior, block: "start" });

        try {
          el.focus({ preventScroll: true });
        } catch {
          el.focus();
        }

        activeSectionId.value = id;
      });
    }

    function goSection(id) {
      const url = new URL(window.location.href);
      url.hash = id;
      window.history.pushState({}, "", url.toString());
      scrollAndFocusSection(id);
    }

    function handleHashChange() {
      const idFromHash = normalizeHash(window.location.hash);
      if (!idFromHash) return;

      const validId = tocSections.some((s) => s.id === idFromHash)
        ? idFromHash
        : tocSections[0]?.id ?? null;

      activeSectionId.value = validId;
      scrollAndFocusSection(validId, { behavior: "auto" });
    }

    onMounted(() => {
      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);

      // run syntax highlighting after Vue has rendered
      nextTick(() => {
        if (window.hljs) {
          window.hljs.highlightAll();
        }
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener("hashchange", handleHashChange);
    });

    return {
      section,
      guideline,
      issueType,
      resolvedResourceSections,
      codeLanguage,
      tocSections,
      activeSectionId,
      goSection,
    };
  },
}).mount("#app");

