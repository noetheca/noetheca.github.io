# noetheca organization portal

The static organization portal for `https://noetheca.github.io`.

The bootstrap version lists reviewed domain repositories without attempting
cross-domain search or live aggregation. Each domain will eventually publish a
versioned JSON manifest that this portal can validate and aggregate at build
time.

## Development

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

## Scope

The current design and domain-card data model are prototypes. Public URLs,
cross-domain search, and automatic rebuild triggers remain open decisions.
The Pages workflow stays skipped while this repository is private and activates
after the code license is approved and the repository is made public.

## Licensing

The code license has not yet been approved. No license file is included, and
external contributions are not currently accepted.
