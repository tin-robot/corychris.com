<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
</script>

<div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
  <!-- Header -->
  <Header />
  <!-- Page -->
  <div class="container mx-auto grid-cols-[200px_minmax(0px,_1fr)_300px]">
    <main class="col-span-1 space-y-4 p-12">
      <slot />
    </main>
  </div>
  <!-- Footer -->
  <Footer />
</div>
