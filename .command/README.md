# Waymark — Agent Commands

Custom slash-commands for AI coding agents working in this repository.
Each file is a self-contained workflow. When a command is invoked, the agent
reads the matching file and executes the workflow step by step.

## Why these files exist

The project ships as a **static export** (`output: "export"`) of a Next.js +
Tailwind app. Commands encode the team's expectations so any agent produces
consistent, releasable output: same verification steps, same structure, same
design language.

## Available commands

| Command              | File                   | What it does                                              |
| -------------------- | ---------------------- | --------------------------------------------------------- |
| `/dev`               | `.command/dev.md`      | Launch the dev server and smoke-test the app.             |
| `/build`             | `.command/build.md`    | Typecheck, lint, and produce the static export.           |
| `/scaffold`          | `.command/scaffold.md` | Scaffold a new page/section following repo conventions.   |
| `/design`            | `.command/design.md`   | Build UI per the Waymark design system + brand skill.     |
| `/content`           | `.command/content.md`  | Add or update site content (services, case studies).      |
| `/ship`              | `.command/ship.md`     | Full verification then a clean, conventional commit.      |
| `/deploy`            | `.command/deploy.md`   | Deploy the `out/` export to the configured host.          |

## File format

Each command file uses the standard agent-command frontmatter:

```markdown
---
description: One sentence describing what the command does.
agent: build
---

(prompt body; $ARGUMENTS is replaced with everything the user typed)
```

Guidelines:

- Keep the body a **prompt to the agent**, not a shell script — the agent
  orchestrates the tools.
- Always end with a defined acceptance/definition-of-done so results are
  verifiable.
- Never hardcode account-specific secrets in a command; reference env vars.

## Adding a command

1. Create `<name>.md` in this folder using the format above.
2. If the project uses opencode slash commands, mirror it in `opencode.json`
   under `command.<name>` (the entry delegating to this file).
3. Add a row to the table above.

## Related documentation

- Brand & UI rules: `.skill/waymark-ui-ux/` (skills)
- Requirements: `.spec/BRD.md`, `.spec/SRS.md`
- Build plan: `docs/implementation-plan.md`