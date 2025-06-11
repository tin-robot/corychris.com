<script lang="ts">
  import { onMount } from "svelte";
  import { MetaTags } from "svelte-meta-tags";
  import { pb } from "../../lib/pocketbase";
  import type { PostsRecord, PostsResponse } from "../../pocketbase-types";
  import { format, toZonedTime } from "date-fns-tz";
  import Placeholder from "../../components/Placeholder.svelte";

  export let slug: string;

  // Mock content loader (replace with actual data fetching)
  let post: PostsResponse<PostsRecord> | null = null;
  let formatted: string = "";

  onMount(async () => {
    post = await pb.collection("posts").getFirstListItem(`slug="${slug}"`);

    // Convert to EST (Eastern Standard Time, fixed offset -5:00)
    const timeZone = "America/New_York";
    const zonedDate = post?.created
      ? toZonedTime(post.created, timeZone)
      : null;

    // Format as MM/DD/YYYY @ hh:mm A EST
    formatted = zonedDate
      ? format(zonedDate, "MM/dd/yyyy @ hh:mm a") + " EST"
      : "Invalid Date";
  });
</script>

<MetaTags title={`${post?.title} - Cory Chris`} description={post?.excerpt} />

<article class="max-w-2xl mx-auto px-4">
  {#if post === null}
    <Placeholder type="blogPost" amount={1} />
  {/if}

  <h1 class="text-4xl mb-6">{post?.title}</h1>
  <p class="text-muted text-sm mb-4">{formatted}</p>
  {@html post?.content}
</article>
