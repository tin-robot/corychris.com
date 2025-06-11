<script lang="ts">
  import { format, toZonedTime } from "date-fns-tz";

  export let slug: string;
  export let title: string;
  export let date: string;
  export let excerpt: string;

  // Convert to EST (Eastern Standard Time, fixed offset -5:00)
  const timeZone = "America/New_York";
  const zonedDate = toZonedTime(date, timeZone);

  // Format as MM/DD/YYYY @ hh:mm A EST
  const formatted = format(zonedDate, "MM/dd/yyyy @ hh:mm a") + " EST";
</script>

<a
  href={`/blog/${slug}`}
  class="block mb-6 p-4 rounded transition hover:bg-gray-800"
>
  <h2 class="text-xl font-semibold text-primary mb-1">{title}</h2>
  <p class="text-sm text-muted mb-2">{formatted}</p>
  <p class="text-sm text-copy">{excerpt}</p>
</a>
