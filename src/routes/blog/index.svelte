<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import BlogPost from "../../components/BlogPost.svelte";
  import type { ListResult } from "pocketbase";
  import type { PostsResponse } from "../../pocketbase-types";
  import { onMount } from "svelte";
  import { pb } from "../../lib/pocketbase";
  import Placeholder from "../../components/Placeholder.svelte";

  let postsList: ListResult<PostsResponse<unknown>> = {
    page: 1,
    perPage: 3,
    totalItems: 0,
    totalPages: 0,
    items: [],
  };

  let posts: PostsResponse<unknown>[] = [];

  onMount(async () => {
    postsList = await pb.collection("posts").getList(1, 50, {
      sort: "-created",
    });

    posts = postsList.items;
  });
</script>

<MetaTags
  title="Blog - Cory Chris"
  description="Insights on ethical tech, AI for social good, and building software that empowers people."
/>

<section class="max-w-2xl mx-auto px-4">
  <h1 class="text-4xl mb-6">Blog</h1>
  {#if posts.length === 0}
    <Placeholder type="blogPost" amount={3} />
  {/if}
  {#each posts as { slug, title, created, excerpt }}
    <BlogPost {slug} {title} date={created} {excerpt} />
  {/each}
</section>
