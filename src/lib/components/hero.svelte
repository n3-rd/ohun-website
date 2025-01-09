<script lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<section class="container min-h-[90vh] py-20">
	<div class="grid items-center gap-12 lg:grid-cols-2">
		<div class="space-y-8">
			<h1 
				in:fly={{ y: 50, duration: 1000 }} 
				class="gradient-text text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
			>
				Sync with Your Music's Soul
			</h1>
			
			<p 
				in:fade={{ delay: 200 }}
				class="text-lg text-gray-600 md:text-xl"
			>
				Experience music on a deeper level with Ohun. Real-time synchronized lyrics 
				that bring your favorite songs to life.
			</p>
			
			<div class="flex gap-4">
				<button 
					class="rounded-full bg-primary px-8 py-4 font-medium text-white transition-all hover:bg-accent"
					onclick={() => window.open('https://github.com/n3-rd/ohun/releases/latest', '_blank')}
				>
					Download Now
				</button>
				<button 
					class="rounded-full border border-primary px-8 py-4 font-medium text-primary transition-all hover:bg-primary hover:text-white"
					onclick={() => window.open('https://github.com/n3-rd/ohun/', '_blank')}
				>
					View Source
				</button>
			</div>
		</div>
		
		<div 
			in:fade={{ delay: 400 }}
			class="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-8"
		>
			<img 
				src="/img/banner.png" 
				alt="Ohun App Interface" 
				class="rounded-2xl shadow-2xl"
			/>
		</div>
	</div>
</section>
