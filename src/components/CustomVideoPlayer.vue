<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { PhPlay, PhPause, PhSpeakerHigh, PhSpeakerSlash } from '@phosphor-icons/vue'

const props = defineProps<{
  src: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(true)
const volume = ref(1)
const isMuted = ref(false)
const progress = ref(0)
const currentTime = ref('0:00')
const duration = ref('0:00')
const showControls = ref(true)

let hideControlsTimeout: number

function formatTime(seconds: number) {
  if (isNaN(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function togglePlay() {
  if (!videoRef.value) return
  if (videoRef.value.paused) {
    videoRef.value.play()
  } else {
    videoRef.value.pause()
  }
}

function handlePlay() {
  isPlaying.value = true
}

function handlePause() {
  isPlaying.value = false
  showControls.value = true
}

function toggleMute() {
  if (!videoRef.value) return
  videoRef.value.muted = !videoRef.value.muted
  isMuted.value = videoRef.value.muted
  if (isMuted.value) {
    volume.value = 0
  } else {
    volume.value = videoRef.value.volume || 1
  }
}

let isDraggingVolume = false

function startVolumeDrag(e: MouseEvent) {
  isDraggingVolume = true
  updateVolume(e)
  window.addEventListener('mousemove', onVolumeDrag)
  window.addEventListener('mouseup', stopVolumeDrag)
}

function onVolumeDrag(e: MouseEvent) {
  if (!isDraggingVolume) return
  updateVolume(e)
}

function stopVolumeDrag() {
  isDraggingVolume = false
  window.removeEventListener('mousemove', onVolumeDrag)
  window.removeEventListener('mouseup', stopVolumeDrag)
}

function updateVolume(e: MouseEvent) {
  const container = document.querySelector('.volume-progress-container') as HTMLElement
  if (!container) return
  const rect = container.getBoundingClientRect()
  const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
  volume.value = pos
  if (videoRef.value) {
    videoRef.value.volume = pos
    if (pos > 0) {
      videoRef.value.muted = false
      isMuted.value = false
    } else {
      videoRef.value.muted = true
      isMuted.value = true
    }
  }
}

function handleTimeUpdate() {
  if (!videoRef.value) return
  const cur = videoRef.value.currentTime
  const dur = videoRef.value.duration || 1
  progress.value = (cur / dur) * 100
  currentTime.value = formatTime(cur)
}

function handleLoadedMetadata() {
  if (!videoRef.value) return
  duration.value = formatTime(videoRef.value.duration)
  videoRef.value.volume = volume.value
}

function handleProgressClick(e: MouseEvent) {
  if (!videoRef.value) return
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const pos = (e.clientX - rect.left) / rect.width
  videoRef.value.currentTime = pos * videoRef.value.duration
}

function resetHideControls() {
  showControls.value = true
  clearTimeout(hideControlsTimeout)
  if (isPlaying.value) {
    hideControlsTimeout = window.setTimeout(() => {
      showControls.value = false
    }, 2500)
  }
}

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      isPlaying.value = false
    })
  }
  resetHideControls()
})

onUnmounted(() => {
  clearTimeout(hideControlsTimeout)
})
</script>

<template>
  <div 
    class="custom-video-player" 
    @mousemove="resetHideControls" 
    @mouseleave="showControls = false"
  >
    <video
      ref="videoRef"
      :src="src"
      loop
      playsinline
      @play="handlePlay"
      @pause="handlePause"
      @timeupdate="handleTimeUpdate"
      @loadedmetadata="handleLoadedMetadata"
      @click="togglePlay"
    ></video>
    
    <Transition name="fade">
      <div v-if="!isPlaying && showControls" class="center-play" @click="togglePlay">
        <PhPlay :size="48" weight="fill" />
      </div>
    </Transition>

    <Transition name="slide-up">
      <div v-show="showControls" class="controls-container">
        <div class="glass-controls">
          <button class="control-btn" :aria-label="isPlaying ? 'Pause' : 'Play'" @click="togglePlay">
            <PhPause v-if="isPlaying" :size="24" weight="fill" />
            <PhPlay v-else :size="24" weight="fill" />
          </button>

          <div class="time-display">{{ currentTime }}</div>

          <div class="progress-container" @click="handleProgressClick">
            <div class="progress-bar">
              <div class="progress-filled" :style="{ width: progress + '%' }"></div>
            </div>
          </div>
          
          <div class="time-display">{{ duration }}</div>

          <div class="volume-container">
            <button class="control-btn" :aria-label="isMuted || volume === 0 ? 'Unmute' : 'Mute'" @click="toggleMute">
              <PhSpeakerSlash v-if="isMuted || volume === 0" :size="24" weight="fill" />
              <PhSpeakerHigh v-else :size="24" weight="fill" />
            </button>
            <div class="volume-progress-container" @mousedown="startVolumeDrag">
              <div class="volume-bar">
                <div class="volume-filled" :style="{ width: (volume * 100) + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.custom-video-player {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  overflow: hidden;
}

video {
  width: 100%;
  height: auto;
  display: block;
}

.center-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
  z-index: 5;
}

.center-play:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: var(--accent-color);
  color: black;
  box-shadow: 0 0 24px rgba(var(--accent-rgb), 0.5);
}

.controls-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 24px 24px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  z-index: 10;
}

.glass-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.control-btn {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.control-btn:hover {
  color: var(--accent-color);
  background: rgba(var(--accent-rgb), 0.1);
}

.time-display {
  font-family: 'Lexend', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  min-width: 44px;
  text-align: center;
  user-select: none;
}

.progress-container {
  flex: 1;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  transition: height 0.2s ease;
}

.progress-container:hover .progress-bar {
  height: 8px;
}

.progress-filled {
  height: 100%;
  background: var(--accent-color);
  border-radius: 3px;
  transition: width 0.1s linear;
  box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.6);
}

.volume-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.volume-progress-container {
  width: 80px;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.volume-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  transition: height 0.2s ease;
}

.volume-progress-container:hover .volume-bar {
  height: 8px;
}

.volume-filled {
  height: 100%;
  background: var(--accent-color);
  border-radius: 3px;
  transition: width 0.1s linear;
  box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.6);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .volume-progress-container {
    width: 60px;
  }
  .controls-container {
    padding: 24px 16px 16px;
  }
}

@media (max-width: 480px) {
  .volume-container {
    display: none;
  }
  .glass-controls {
    padding: 10px 14px;
    gap: 12px;
  }
}
</style>
