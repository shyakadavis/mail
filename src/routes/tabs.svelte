<script lang="ts">
	import Search from 'lucide-svelte/icons/search';

	import MailList from './mail-list.svelte';

	import { Input } from '$lib/components/ui/input';
	import { Separator } from '$lib/components/ui/separator';
	import * as Tabs from '$lib/components/ui/tabs';
	import { mails } from '$lib/data';
</script>

<Tabs.Root value="all">
	<div class="flex items-center px-4 py-2">
		<h1 class="text-xl font-bold">Inbox</h1>
		<Tabs.List class="ml-auto">
			<Tabs.Trigger value="all" class="text-zinc-600 dark:text-zinc-200">All mail</Tabs.Trigger>
			<Tabs.Trigger value="unread" class="text-zinc-600 dark:text-zinc-200">Unread</Tabs.Trigger>
		</Tabs.List>
	</div>
	<Separator />
	<div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<form>
			<div class="relative">
				<Search class="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
				<Input placeholder="Search" class="pl-8" />
			</div>
		</form>
	</div>
	<Tabs.Content value="all" class="m-0">
		<MailList items={mails} />
	</Tabs.Content>
	<Tabs.Content value="unread" class="m-0">
		<MailList items={mails.filter((item) => !item.read)} />
	</Tabs.Content>
</Tabs.Root>
