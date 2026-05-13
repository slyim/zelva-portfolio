<script setup lang="ts">
import { PhGenderTransgender, PhHeart } from '@phosphor-icons/vue'
</script>

<template>
  <footer v-scroll-reveal="{ distance: 20 }" class="site-footer" aria-label="Footer">
    <div class="footer-inner">
      <div class="footer-left">
        <span class="footer-link" role="note">legal info</span>
        <span class="footer-copy">Copyrighted by Zelva</span>
        <span class="footer-made-with">
          Made with Opencode, Zed &amp; Figma 
          <PhHeart :size="12" weight="fill" class="heart-icon" />
        </span>
        <span class="footer-trans-rights">
          Trans rights are human rights
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="trans-icon">
            <circle cx="12" cy="12" r="4" />
            <line x1="14.83" y1="9.17" x2="20" y2="4" />
            <polyline points="15 4 20 4 20 9" />
            <line x1="12" y1="16" x2="12" y2="22" />
            <line x1="9" y1="19" x2="15" y2="19" />
            <line x1="9.17" y1="9.17" x2="4" y2="4" />
            <polyline points="9 4 4 4 4 9" />
            <line x1="5.5" y1="8.5" x2="8.5" y2="5.5" />
          </svg>
        </span>
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
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Lexend', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(var(--text-rgb), 0.35);
  letter-spacing: 0.02em;
}

.heart-icon {
  color: var(--accent-color);
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

.footer-trans-rights {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Lexend', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(var(--text-rgb), 0.6);
  margin-top: 4px;
}

.trans-icon {
  color: #B366FF;
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

@media (max-width: 480px) {
  .site-footer {
    padding-bottom: 100px;
  }
}
</style>
