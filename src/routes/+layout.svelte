<script>
	import '../styles/app.pcss';
	// Supports weights 100-900
	import '@fontsource-variable/inter';
	import { ModeWatcher } from 'mode-watcher';
</script>

<slot />

<ModeWatcher />
