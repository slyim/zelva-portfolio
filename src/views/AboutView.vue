<template>
  <div class="about page-section animate-fade-in">
    <div class="about-inner animate-fade-in-up delay-200">
      <h1 class="about-title">This is an about page</h1>
      <p class="about-text">More content coming soon.</p>
    </div>
  </div>
</template>

<style scoped>
.page-section {
  position: relative;
  width: 100%;
  min-height: 100dvh;
  background: var(--bg-page);
  padding: 140px 48px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.about-title {
  font-family: 'Lexend', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
}

.about-text {
  font-family: 'Lexend', sans-serif;
  font-size: 1rem;
  color: rgba(var(--text-rgb), 0.6);
  margin: 0;
}

@media (max-width: 768px) {
  .page-section {
    padding: 120px 24px 60px;
  }
}

@media (max-width: 480px) {
  .page-section {
    padding: 48px 16px 120px;
  }
}
</style>
