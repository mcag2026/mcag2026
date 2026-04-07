// js/app-index.js
import { sections as allSections } from "./data.js";

const { createApp, ref, nextTick, onMounted, onBeforeUnmount } = Vue;

createApp({
  setup() {
    const sections = ref(allSections);

    const activeSectionId = ref(null);

    function normalizeHash(hash) {
      return (hash || "").replace(/^#/, "");
    }

    function scrollAndFocusSection(id, { behavior = "smooth" } = {}) {
      if (!id) return;

      nextTick(() => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior, block: "start" });

        // Make the context change explicit to AT/keyboard users
        try {
          el.focus({ preventScroll: true });
        } catch {
          // Safari fallback
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

      const validId =
        sections.value.find((s) => s.id === idFromHash)?.id ||
        sections.value[0]?.id ||
        null;

      activeSectionId.value = validId;

      // If there is no hash, don't steal focus on first load
      if (idFromHash) {
        scrollAndFocusSection(validId, { behavior: "auto" });
      }
    }

    onMounted(() => {
      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("hashchange", handleHashChange);
    });

    return {
      sections,
      activeSectionId,
      goSection,
    };
  },
}).mount("#app");
