<script lang="ts">
  export let title: string; // Job title or project name
  export let company: string; // Company or organization name
  export let startYear: number; // Timeframe like "2022–2024"
  export let endYear: number; // Timeframe like "2022–2024"
  export let summary: string; // Short description or role
</script>

<div class="block mb-6 p-4 rounded transition">
  <h2 class="text-xl font-semibold text-primary mb-1">{title}</h2>
  <p class="text-sm text-muted mb-2">{company}</p>
  <p class="text-sm text-muted mb-2">
    {startYear} - {endYear === 0 ? "Present" : endYear}
  </p>
  <p class="text-sm text-copy">{@html summary}</p>
</div>
