<script lang="ts">
  import { onMount } from "svelte";
  import BlogPost from "../components/BlogPost.svelte";
  import Hero from "../components/Hero.svelte";
  import { MetaTags } from "svelte-meta-tags";
  import type { PostsResponse } from "../pocketbase-types";
  import { pb } from "../lib/pocketbase";
  import type { ListResult } from "pocketbase";
  import Placeholder from "../components/Placeholder.svelte";

  let postsList: ListResult<PostsResponse<unknown>> = {
    page: 1,
    perPage: 3,
    totalItems: 0,
    totalPages: 0,
    items: [],
  };

  let posts: PostsResponse<unknown>[] = [];

  onMount(async () => {
    postsList = await pb.collection("posts").getList(1, 3, {
      sort: "-created",
    });

    posts = postsList.items;
  });

  const startYear = 2010; // Update this to match your real start year
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;
</script>

<MetaTags
  title="Building Software for Social Good - Cory Chris"
  description="I'm Cory Chris, a technology leader and founder with {experienceYears} years
      of experience creating real-world impact through software. I lead teams, scale
      platforms, and spearhead projects that make life better, from modernizing government
      systems to building Open Source tools and developing ethical AI for social
      good."
/>

<Hero />

<section class="max-w-2xl mx-auto px-4 py-10">
  <h1 class="text-4xl mb-6">Latest Posts</h1>
  {#if posts.length === 0}
    <Placeholder type="blogPost" amount={3} />
  {/if}
  {#each posts as { slug, title, created, excerpt }}
    <BlogPost {slug} {title} date={created} {excerpt} />
  {/each}
</section>
