<script>
  import { MetaTags } from "svelte-meta-tags";

  const startYear = 2010; // Update if needed
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;
</script>

<MetaTags
  title="About Me - Cory Chris"
  description="I'm Cory Chris, a technology leader and founder with {experienceYears} years
      of experience creating real-world impact through software. I lead teams, scale
      platforms, and spearhead projects that make life better, from modernizing government
      systems to building Open Source tools and developing ethical AI for social
      good."
/>

<section class="max-w-2xl mx-auto px-4">
  <h1 class="text-4xl mb-6">About Me</h1>
  <div class="px-4">
    <p class="mb-4">
      I'm Cory Chris, a technology leader and founder with {experienceYears} years
      of experience creating real-world impact through software. I lead teams, scale
      platforms, and spearhead projects that make life better, from modernizing government
      systems to building Open Source tools and developing ethical AI for social
      good.
    </p>

    <p class="mb-4">
      My career has spanned government, nonprofits, and mission-driven startups.
      I've led cross-functional teams, modernized outdated systems, and
      developed full-stack applications that solve real-world problems. Whether
      I'm improving internal workflows or launching new platforms, I always
      bring a human-centered approach to my work.
    </p>

    <p class="mb-4">
      I'm also the founder of the Software for Progress Foundation, an incubator
      for developers building Open Source projects that promote education,
      accessibility, and security. Through this work, I help others turn good
      ideas into sustainable, high-impact tools.
    </p>

    <p class="mb-4">
      I specialize in AI for social good, using techniques like
      Retrieval-Augmented Generation (RAG), small local LLMs, and ChromaDB to
      build systems that inform, empower, and protect people. From
      misinformation detection to educational simulations, I’m focused on
      building ethical, privacy-respecting AI that serves communities, not
      corporations.
    </p>

    <p class="mb-4">
      My technical stack includes Python, Node.js, TypeScript, Dart, and modern
      cloud infrastructure on AWS and GCP. I care deeply about clean code,
      thoughtful UX, and mentorship, because building good software means
      building up the people behind it.
    </p>
  </div>
</section>
