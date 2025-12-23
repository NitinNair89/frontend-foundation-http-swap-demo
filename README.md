# Frontend Foundation — HTTP Swap Demo

This repository demonstrates how to use the `frontend-foundation` template to swap infrastructure implementations without changing UI code.

---

## What this demo shows:

- UI components do not import fetch or axios
- Services depend on a stable HttpClient contract
- HTTP implementation can be swapped (_runtime swap added only for demo_)
- No UI or hook changes are required

---

## How to test

1. Run the app
2. Click “Use Fetch” or “Use Axios”
3. Observe that UI behavior stays the same

This repo intentionally focuses on ONE concern:
**Transport swap-ability**.

Architecture details live in the template repo:
[Frontend Foundation](https://github.com/NitinNair89/frontend-foundation)
