<script lang="ts">
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

	const default_layout = [265, 440, 655];
</script>

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

<style lang="postcss">
	:global(.splitpanes__pane) {
		@apply !bg-transparent;
	}

	:global(.default-theme.splitpanes--vertical > .splitpanes__splitter) {
		@apply !w-[1.5px] !border-l-[1.5px] !border-border;
	}
</style>
