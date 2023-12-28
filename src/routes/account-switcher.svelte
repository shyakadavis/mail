<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { cn } from '$lib/utils';
	import type { Account } from '$lib/data';

	export let is_collapsed: boolean;
	export let accounts: Account[];

	let selected_account = accounts[0];
</script>

<div
	class={cn('mb-1 flex h-[52px] items-center justify-center', is_collapsed ? 'h-[52px]' : 'px-2')}
>
	<Select.Root
		portal={null}
		selected={{ value: selected_account.email, label: selected_account.label }}
		onSelectedChange={(e) => {
			selected_account = accounts.find((account) => account.email === e?.value) || accounts[0];
		}}
	>
		<Select.Trigger
			class={cn(
				'flex items-center gap-2',
				is_collapsed && 'flex size-9 shrink-0 items-center justify-center p-0'
			)}
			aria-label="Select account"
		>
			<svelte:component
				this={accounts.find((account) => account.email === selected_account.email)?.icon}
				aria-hidden="true"
				class={cn('size-4 shrink-0', 'hidden' && is_collapsed)}
			/>
			<Select.Value
				placeholder="Select an Account"
				class={cn('ml-2 line-clamp-1 flex w-full items-center gap-1 truncate', {
					'hidden w-auto': is_collapsed
				})}
			/>
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each accounts as account}
					<Select.Item value={account.email} label={account.label} class="flex items-center gap-3">
						<svelte:component
							this={account.icon}
							aria-hidden="true"
							class="size-4 shrink-0 text-foreground"
						/>
						{account.email}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
		<Select.Input name="account" />
	</Select.Root>
</div>
