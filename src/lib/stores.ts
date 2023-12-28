import { writable } from 'svelte/store';
import { mails, type Mail } from './data';

type MailStore = {
	selected: Mail['id'] | null;
};

function create_mail_store() {
	const store = writable<MailStore>({
		selected: mails[0].id
	});

	return {
		subscribe: store.subscribe,
		set_mail: (id: Mail['id']) => {
			store.update((store) => ({ ...store, selected: id }));
		}
	};
}

export const mail_store = create_mail_store();
