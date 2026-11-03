# Module Test Map — Auto-Gerado

Gerado pela auto-detecção do Vetor (runtime: **node**; comandos ajustados manualmente em 2026-11-02).
Revise os comandos: eles são executados de forma headless pelo `fix` e pelo `ship`.

---

## Comandos por módulo

| Módulo | Comando headless | Notas |
|--------|------------------|-------|
| `backend` | `cd backend && find . -name '*.js' -not -path './node_modules/*' -print0 \| xargs -0 -n1 node --check` | Node/npm (ESM) — sem suíte de testes; gate de sintaxe apenas. Substituir quando houver testes reais |
| `frontend` | `cd frontend && npx --no-install tsc --noEmit` | Next.js/pnpm — sem suíte de testes; só typecheck. `pnpm` não está no PATH; `next lint` é interativo e o `eslint.config.js` (flat, ESLint 9) é incompatível com o eslint instalado — reincluir lint após corrigir |

## Detecção de módulo por arquivos alterados

| Prefixo do path | Módulo |
|-----------------|--------|
| `backend/` | `backend` |
| `frontend/` | `frontend` |

## Regras de execução

### Exclusões obrigatórias
Todo `find`/`grep` executado pelas skills deve excluir:
`.claude/worktrees/*`, `node_modules/`, `target/`, `build/`, `dist/`, `.venv/`, `__pycache__/`.
