# INIT — Brand colors

Fuente de verdad: `src/index.css` (`@theme`).

## Primitivos

| Nombre | Hex | Rol |
|--------|-----|-----|
| **Perla** | `#F7F3EC` | Fondo y superficies de **todo** el sitio |
| **On surface (navy)** | `#0F172A` | Texto principal |
| **Verde marca** | `#1E8F41` | Desarrollo, CTAs de producto, acentos |
| **Turquesa** | `#00A7A7` | Marketing, claridad, eyebrows |
| **RFID plateado** | `#C0C7D1` (translúcido) | initlogistics / hardware RFID |

## Semántica de uso

1. **Perla** domina el entorno — UI clara, calmada.
2. **Verde** = desarrollo / sistemas / software a medida / CTAs técnicos.
3. **Turquesa** = marketing / comunicación / énfasis de claridad (no CTAs de producto).
4. **RFID** = plateado translúcido (`.glass-card--rfid`, `.rfid-surface`) en logística / hardware.
5. Texto secundario: `#475569` sobre perla (AA).

## Tokens CSS clave

| Token | Hex |
|-------|-----|
| `--color-background` / `--color-surface` | `#F7F3EC` |
| `--color-on-surface` | `#0F172A` |
| `--color-primary` / CTA | `#1E8F41` |
| `--color-secondary` | `#00A7A7` |
| `--color-rfid` | `#C0C7D1` |
| `--color-surface-container` | `#FFFFFF` |
| `--color-surface-container-low` | `#F1EBE2` |

Gradiente marca: green → teal (`--gradient-accent`).  
Dev: `--gradient-dev`. Marketing: `--gradient-marketing`.
