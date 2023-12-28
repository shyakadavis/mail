<script lang="ts">
	import '../styles/panes.pcss';
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import AccountSwitcher from './account-switcher.svelte';
	import MailDisplay from './mail-display.svelte';
	import Nav from './nav.svelte';
	import Tabs from './tabs.svelte';

	import { Separator } from '$lib/components/ui/separator';
	import { accounts, mails } from '$lib/data';
	import { primary_routes, secondary_routes } from '$lib/config';
	import { mail_store } from '$lib/stores';

	let is_collapsed = false;
	let default_layout = [265, 440, 655];

	// TODO: Add better support for mobile devices. This is a temporary fix.
	function handle_resize() {
		if (window.innerWidth < 768) {
			is_collapsed = true;
			default_layout = [33, 220, 0];
		} else {
			is_collapsed = false;
			default_layout = [265, 440, 655];
		}
	}
</script>

<svelte:window on:resize={handle_resize} />

<Splitpanes class="min-h-svh transition-all duration-300 ease-in-out">
	<Pane minSize={15} maxSize={20} size={default_layout[0]}>
		<AccountSwitcher {is_collapsed} {accounts} />
		<Separator />
		<Nav {is_collapsed} routes={primary_routes} />
		<Separator />
		<Nav {is_collapsed} routes={secondary_routes} />
	</Pane>
	<Pane minSize={30} size={default_layout[1]}>
		<Tabs />
	</Pane>
	<Pane size={default_layout[2]}>
		<MailDisplay mail={mails.find((item) => item.id === $mail_store.selected) || null} />
	</Pane>
</Splitpanes>
