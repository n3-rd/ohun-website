<script lang="ts">
	import Metadate from '$lib/components/metadate.svelte';
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Metadate />
{@render children?.()}
