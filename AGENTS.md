# AGENTS.md

Read the organization project brief before implementation:
`https://github.com/noetheca/.github/blob/main/docs/PROJECT_BRIEF.md`.

## Repository responsibilities

- Provide the organization-level static portal.
- Link to domain sites and, later, aggregate their versioned manifests.
- Do not duplicate domain content or shared engine components here.

## Constraints

- Prefer static HTML and minimal client JavaScript.
- Keep keyboard navigation, responsive layout, and readable semantics.
- Do not finalize public URL, search, or manifest behavior by assumption.
- Do not fetch untrusted manifest content in a browser without validation.
- Pin dependencies and GitHub Actions.
- Run `pnpm check` before handing off changes.
