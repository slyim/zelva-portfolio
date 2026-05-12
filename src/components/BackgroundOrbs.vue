<template>
  <div class="orbs-container" aria-hidden="true">
    <div class="orb orb-1" />
    <div class="orb orb-2" />
    <div class="orb orb-3" />
    <div class="orb orb-4" />
  </div>
</template>

<style scoped>
.orbs-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
  will-change: transform;
}

.orb-1 {
  width: 500px;
  height: 500px;
  top: -10%;
  left: -5%;
  background: radial-gradient(circle, rgba(208, 255, 0, 0.25) 0%, transparent 70%);
  animation: orbFloat1 20s ease-in-out infinite alternate;
}

.orb-2 {
  width: 400px;
  height: 400px;
  top: 40%;
  right: -8%;
  background: radial-gradient(circle, rgba(208, 255, 0, 0.18) 0%, transparent 70%);
  animation: orbFloat2 25s ease-in-out infinite alternate;
}

.orb-3 {
  width: 350px;
  height: 350px;
  bottom: 5%;
  left: 20%;
  background: radial-gradient(circle, rgba(208, 255, 0, 0.15) 0%, transparent 70%);
  animation: orbFloat3 18s ease-in-out infinite alternate;
}

.orb-4 {
  width: 300px;
  height: 300px;
  bottom: 30%;
  right: 15%;
  background: radial-gradient(circle, rgba(208, 255, 0, 0.12) 0%, transparent 70%);
  animation: orbFloat4 22s ease-in-out infinite alternate;
}

@keyframes orbFloat1 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(40px, 60px) scale(1.1); }
}

@keyframes orbFloat2 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-30px, 40px) scale(1.15); }
}

@keyframes orbFloat3 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(50px, -30px) scale(1.08); }
}

@keyframes orbFloat4 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-20px, -50px) scale(1.12); }
}

/* Light mode: subtler orbs */
html[data-theme="light"] .orb {
  opacity: 0.2;
  filter: blur(100px);
}

html[data-theme="light"] .orb-1 {
  background: radial-gradient(circle, rgba(90, 158, 0, 0.2) 0%, transparent 70%);
}

html[data-theme="light"] .orb-2 {
  background: radial-gradient(circle, rgba(90, 158, 0, 0.15) 0%, transparent 70%);
}

html[data-theme="light"] .orb-3 {
  background: radial-gradient(circle, rgba(90, 158, 0, 0.12) 0%, transparent 70%);
}

html[data-theme="light"] .orb-4 {
  background: radial-gradient(circle, rgba(90, 158, 0, 0.1) 0%, transparent 70%);
}
</style>
