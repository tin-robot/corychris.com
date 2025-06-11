<script lang="ts">
  import { onMount } from "svelte";
  import Experience from "../components/Experience.svelte";
  import { pb } from "../lib/pocketbase";
  import type { ExperiencesResponse } from "../pocketbase-types";
  import Placeholder from "../components/Placeholder.svelte";
  import { MetaTags } from "svelte-meta-tags";

  let experience: ExperiencesResponse<unknown>[] = [];

  onMount(async () => {
    experience = await pb.collection("experiences").getFullList({
      sort: "-startYear",
    });
  });
</script>

<MetaTags
  title="Experience - Cory Chris"
  description="Explore my professional journey and the impact I've made in the tech industry."
/>

<section class="max-w-2xl mx-auto px-4">
  <h1 class="text-4xl mb-6">Experience</h1>

  <p class="py-6 text-lg p-4 block">
    Explore my professional journey and the impact I've made in the tech
    industry.
  </p>

  {#if experience.length === 0}
    <Placeholder type="experience" amount={2} />
  {/if}

  {#each experience as { title, company, startYear, endYear, summary }}
    <Experience {title} {company} {startYear} {endYear} {summary} />
  {/each}
</section>
