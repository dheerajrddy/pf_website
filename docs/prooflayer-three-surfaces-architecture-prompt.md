# Codex handoff prompt: ProofLayer three-surface architecture

Edit the ProofLayer website repository directly. Replace the landing-page hero architecture illustration with a deterministic SVG. Preserve the existing visual system and hero copy.

## Objective

Create a high-level product architecture diagram that a CISO or CTO can understand in five seconds:

**One ProofLayer platform delivers three product surfaces. All three deploy the same detection engine and produce one unified vulnerability report.**

## Product truth

1. **Code Scanner**
   - Open-source project: `https://github.com/sinewaveai/agent-security-scanner-mcp`
   - Runs on a developer laptop during development, pre-commit, or CI.
   - Must be visibly air-gapped from the other two products.
   - Makes no live network call to the ProofLayer platform.
   - Exports finding artifacts as SARIF or JSON for the unified report.

2. **Automated Red Teaming**
   - Runs as a scheduled batch service, typically at night.
   - Executes 5-phase NEXUS campaigns against every available deployed multi-agent system.
   - Produces verified exploits, replay traces, and campaign findings.

3. **MCP Runtime Security**
   - Runs inline during serving and inference.
   - Sits between real-time user or agent traffic and production multi-agent systems.
   - Detects or blocks prompt injection, tool abuse, data exfiltration, and poisoned context.
   - Produces live runtime events and findings.

## Shared architecture

- Use three compact product cards feeding one large card labeled `PROOFLAYER SECURITY PLANE`.
- Put the shared `ONE DETECTION ENGINE` claim inside the security plane once. Do not repeat it in every product card.
- Do not draw a live platform connection from the air-gapped Code Scanner.
- Use one dashed connector labeled `AIR-GAPPED EXPORT` for Code Scanner.
- Use solid connectors for Automated Red Teaming and MCP Runtime Security.
- Inside the security plane, show only three stages: `DETECT`, `VERIFY`, `PROVE`.
- Send the security plane into one output card labeled `ONE VULNERABILITY REPORT`.
- The report may contain four short fields: `EXPLOIT`, `SEVERITY`, `OWNER`, `AUDIT EVIDENCE`.
- Do not show SARIF, JSON, NEXUS phases, individual agents, traffic routing, framework badges, or report schemas in the hero diagram.

## Composition

- Canvas: `720×720`, designed for the right half of the desktop hero.
- Follow a simple three-band layout inspired by control-plane diagrams:
  1. Three equal product cards: Code Scanner, Automated Red Teaming, MCP Runtime Security.
  2. One visually dominant ProofLayer Security Plane.
  3. One unified vulnerability report.
- Product cards use one deployment cue each: `Local and air-gapped`, `Scheduled nightly`, and `Inline with live traffic`.
- Make the Code Scanner card and connector dashed to signal isolation.
- Use small animated pulse dots on connectors. Respect `prefers-reduced-motion`.
- A CISO must understand the diagram in five seconds. Remove any label that requires explanation.

## Visual language

- Flat 2.5D SaaS architecture diagram, not isometric or photorealistic.
- Background: `#F8FAFC` with a subtle dotted grid.
- White cards, 12–16px corner radius, thin slate borders, soft shadows.
- Primary accent: `#2563EB`.
- Text: `#334155`.
- Severity red: `#DC2626`, only for threats or hostile traffic.
- Small-caps monospace section labels with colored dot prefixes.
- Generous white space and crisp, deterministic SVG text.
- No people, locks-and-hoodies imagery, brains, or decorative jargon.

## Required product navigation update

Replace the current Platform/Open Source dropdown split with one `Products` dropdown containing exactly:

1. `Code Scanner` — Open-source, air-gapped developer scanning.
2. `Automated Red Teaming` — Scheduled attacks across deployed AI systems.
3. `MCP Runtime Security` — Inline protection during serving and inference.

Every dropdown link must resolve to a real landing-page anchor. Verify desktop and mobile navigation, SVG rendering, reduced-motion behavior, lint, and production build.
