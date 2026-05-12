<template>
  <footer v-scroll-reveal="{ distance: 20 }" class="site-footer" aria-label="Footer">
    <div class="footer-inner">
      <div class="footer-left">
        <span class="footer-link" role="note">legal info</span>
        <span class="footer-copy">Copyrighted by Zelva</span>
        <span class="footer-made-with">Made with Opencode &amp; Zed</span>
      </div>

      <div class="footer-right">
        <span class="footer-year">2026</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  width: 100%;
  background: rgba(var(--bg-section-rgb), 0.95);
  border-top: 1px solid rgba(var(--border-rgb), 0.08);
  padding: 32px 48px;
  display: flex;
  justify-content: center;
}

.footer-inner {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-link {
  font-family: 'Lexend', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.5);
  cursor: pointer;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: rgba(var(--text-rgb), 0.85);
}

.footer-copy {
  font-family: 'Lexend', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.5);
}

.footer-made-with {
  font-family: 'Lexend', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.35);
  letter-spacing: 0.02em;
}

.footer-right {
  display: flex;
  align-items: center;
}

.footer-year {
  font-family: 'Lexend', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.35);
}

/* Responsive */
@media (max-width: 768px) {
  .site-footer {
    padding: 24px;
  }

  .footer-inner {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-left {
    align-items: center;
  }
}
</style>
