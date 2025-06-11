<script lang="ts">
  export let type: "experience" | "project" | "blogPost";
  export let amount: number;
</script>

{#each Array(amount) as _}
  {#if type === "experience"}
    <div class="block mb-6 p-4 rounded transition space-y-3">
      <div class="placeholder h-6 w-3/4 animate-pulse rounded"></div>
      <div class="placeholder h-4 w-1/2 animate-pulse rounded"></div>
      <div class="placeholder h-4 w-1/3 animate-pulse rounded"></div>
      <div class="space-y-2">
        <div class="placeholder h-3 w-full animate-pulse rounded"></div>
        <div class="placeholder h-3 w-5/6 animate-pulse rounded"></div>
        <div class="placeholder h-3 w-2/3 animate-pulse rounded"></div>
      </div>
    </div>
  {/if}

  {#if type === "blogPost"}
    <div class="block mb-6 p-4 rounded transition hover:bg-gray-800 space-y-3">
      <div class="placeholder h-6 w-full animate-pulse rounded"></div>
      <div class="placeholder h-4 w-2/3 animate-pulse rounded"></div>
      <div class="space-y-2">
        <div class="placeholder h-3 w-full animate-pulse rounded"></div>
        <div class="placeholder h-3 w-5/6 animate-pulse rounded"></div>
        <div class="placeholder h-3 w-2/3 animate-pulse rounded"></div>
      </div>
    </div>
  {/if}
{/each}
