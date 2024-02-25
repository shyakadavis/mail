## Note

A more accurate and robust implementation is now [live](https://www.shadcn-svelte.com/) thanks to [Hunter](https://github.com/huntabyte/)'s work on [PaneForge](http://www.paneforge.com/). If you're curious, details can be found [here](https://github.com/huntabyte/shadcn-svelte/pull/811).

Consider this a keep for posterity's sake.

## Shadcn-svelte mail example

This is a simple attempt to recreate the [shadcn mail](https://ui.shadcn.com/examples/mail) using our very own [shadcn-svelte](https://www.shadcn-svelte.com/).

A live demo can be found [here](https://mail.shyakadavis.me/).

## 🌊

- [x] [svelte-splitpanes](https://github.com/orefalo/svelte-splitpanes) en lieu of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels).
- [x] [svelte-time](https://github.com/metonym/svelte-time)(built on [dayjs](https://github.com/iamkun/dayjs/)) en lieu of [date-fns](https://github.com/date-fns/date-fns/).
- [x] good ol' [svelte stores](https://svelte.dev/tutorial/writable-stores) en lieu of [jotai](https://github.com/pmndrs/jotai).

## Notes

- Svelte-splitpanes was kind of limiting; will keep an eye out for a better alternative.
- Svelte-time is actually really, really, simple & neat. Consider giving it a try and a star [here](https://github.com/metonym/svelte-time).
- Shadcn-svelte is still yet to implement the [scroll-area](https://ui.shadcn.com/docs/components/scroll-area/) component, so I made a nasty hack.
- Popover and Tooltip builders are sort of clashing with each other, even though I delegated both events to the button. Check out the tooltip/popover trigger [here](https://github.com/shyakadavis/mail/blob/main/src/routes/mail-display.svelte#L67). I tried switching around the order of the builders, but it was worse. That is the only reasonable compromise I could come up with.
- Implement a better responsive design when I get the time.

## 🚀

```bash
git clone https://github.com/shyakadavis/mail.git

cd mail

pnpm i

pnpm dev
```
