// Global Flowbite theme overrides used app-wide
// Keep this minimal and focused on shared layout styles

export const appFlowbiteTheme = {
  sidebar: {
    root: {
      base: "relative h-full",
      inner: "h-full overflow-y-auto !bg-black text-white",
      collapsed: { on: "w-16", off: "" },
    },
    items: {
      base: "gap-3",
    },
    itemGroup: {
      base: "space-y-1",
    },
    item: {
      base: "flex items-center rounded-xl p-2 !text-text1 hover:!bg-secondary !hover:text-white transition",
      active: "text-white !bg-secondary",
      icon: { base: "h-5 w-5 mr-0", active: "text-white" },
      content: { base: "truncate" },
      label: "ml-auto",
      listItem: "list-none",
      collapsed: { insideCollapse: "", noIcon: "" },
    },
  },
  button: {
    color: {
      yellow:
        "!bg-brand !text-black hover:!bg-brand/90 focus:!ring-brand/30 disabled:!opacity-50",
    },
    outlineColor: {
      yellow:
        "border border-brand text-brand hover:bg-brand hover:text-black focus:ring-brand/30",
    },
  },
  table: {
    root: {
      base: "w-full text-left text-sm text-text1",
      shadow: "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-primary drop-shadow-md",
      wrapper: "relative",
    },
    head: {
      base: "group/head !text-xs uppercase !text-text1",
      cell: {
        base: "!bg-quaternary !text-text1 !py-5",
      },
    },
    body: {
      base: "group/body",
      cell: {
        base: "px-6 !py-2 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
      },
    },
    row: {
      base: "group/row !bg-secondary !py-1",
      hovered: "hover:!bg-secondary/60",
    },
  },
  textInput: {
    base: "flex",
    addon: "inline-flex items-center rounded-l-md border border-r-0 border-border bg-secondary px-3 text-sm text-white",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-text1",
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-text1",
      },
      input: {
        base: "block w-full border border-border bg-primary text-white placeholder-text1 focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand disabled:cursor-not-allowed disabled:opacity-50",
        sizes: { sm: "p-2 sm:text-xs", md: "p-2.5 text-sm", lg: "p-4 sm:text-base" },
        colors: {
          gray: "border-border bg-primary text-white placeholder-text1 focus:border-brand focus:ring-brand",
          info: "border-border bg-primary text-white placeholder-text1 focus:border-brand focus:ring-brand",
          failure: "border-red-500 bg-primary text-white placeholder-text1 focus:border-red-500 focus:ring-red-500",
          warning: "border-brand bg-primary text-white placeholder-text1 focus:border-brand focus:ring-brand",
          success: "border-green-500 bg-primary text-white placeholder-text1 focus:border-green-500 focus:ring-green-500",
        },
        withRightIcon: { on: "pr-10", off: "" },
        withIcon: { on: "pl-10", off: "" },
        withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
        withShadow: { on: "shadow-sm", off: "" },
      },
    },
  },
} as any;
