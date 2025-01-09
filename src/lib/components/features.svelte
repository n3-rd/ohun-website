<section class="container py-20">
  <h2 class="gradient-text text-center text-3xl font-bold md:text-4xl">
    Why Choose Ohun?
  </h2>
  
  <div class="mt-16 grid gap-8 md:grid-cols-3">
    {#each features as feature}
      <div class="rounded-xl bg-secondary p-6">
        <div class="mb-4 inline-block rounded-lg bg-primary/10 p-3">
          <svelte:component this={feature.icon} class="h-6 w-6 text-primary" />
        </div>
        <h3 class="mb-2 text-xl font-semibold">{feature.title}</h3>
        <p class="text-gray-600">{feature.description}</p>
      </div>
    {/each}
  </div>
</section>

<script lang="ts">
  import { Music, Globe, Zap } from 'lucide-svelte';

  const features = [
    {
      icon: Music,
      title: 'Perfect Sync',
      description: 'Lyrics that match perfectly with your music, word by word.'
    },
    {
      icon: Globe,
      title: 'Multi-Platform',
      description: 'Available on Linux, with Windows and Mac support coming soon.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Minimal resource usage with maximum performance.'
    }
  ];
</script> 