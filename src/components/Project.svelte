<script lang="ts">
  export let name: string;
  export let description: string;
  export let website: string;
  export let technology: string; // Array of tech tags
  let technologyArray: string[] = technology
    ? technology.split(",").map((tech) => tech.trim())
    : [];
</script>

<div class="block mb-6 p-4 rounded transition">
  <h2 class="text-xl font-semibold text-primary mb-2">{name}</h2>
  <p class="text-sm text-copy mb-3">{description}</p>

  <a
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    class="text-sm text-blue-400 hover:underline mb-4 block"
  >
    {website}
  </a>

  <div class="flex flex-wrap gap-2 mt-2">
    {#each technologyArray as tech}
      <span class="text-xs bg-gray-700 text-white px-2 py-1 rounded-full">
        {tech}
      </span>
    {/each}
  </div>
</div>
