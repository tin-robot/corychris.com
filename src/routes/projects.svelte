<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import Project from "../components/Project.svelte";
  import Placeholder from "../components/Placeholder.svelte";
  import { onMount } from "svelte";
  import type { PostsResponse, ProjectsResponse } from "../pocketbase-types";
  import { pb } from "../lib/pocketbase";

  let projects: ProjectsResponse<unknown>[] = [];

  onMount(async () => {
    projects = await pb.collection("projects").getFullList();
  });
</script>

<MetaTags
  title="Projects - Cory Chris"
  description="Explore my projects that focus on using technology for social good."
/>

<section class="max-w-2xl mx-auto px-4">
  <h1 class="text-4xl mb-6">Projects</h1>

  <p class="py-6 text-lg p-4 block">
    Explore my projects that focus on using technology for social good.
  </p>

  {#if projects.length === 0}
    <Placeholder type="blogPost" amount={3} />
  {/if}

  {#each projects as { name, description, website, technology }}
    <Project {name} {description} {website} {technology} />
  {/each}
</section>
