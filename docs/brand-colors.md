# INIT — Brand colors

Fuente: tokens LaTeX oficiales. Sistema aplicado en `src/index.css` (`@theme`) con variaciones WCAG AA para dark UI.

## Primitivos

| Nombre | Hex | Psicología | Rol |
|--------|-----|------------|-----|
| **INITNavy** | `#062D55` | Confianza, autoridad, profundidad | Base de superficies dark |
| **INITGreen** | `#1E8F41` | Crecimiento, salud, fiabilidad | Marca / identidad |
| **INITTeal** | `#00A7A7` | Claridad, calma tecnológica, diálogo | Comunicación / foco |
| **INITLime** | `#7ED957` | Progreso, energía, avance | Acento escaso (~5%) |
| **INITLight** | `#F4F7FB` | Apertura, claridad | Texto / fondos claros |
| **INITMint** | `#E8F8F0` | Frescura, alivio | Estados soft / éxito |
| **INITGray** | `#6B7280` | Neutralidad, equilibrio | Neutro de UI |

## Cómo se usan (consultora, no “venta gritona”)

1. **Navy** domina el entorno → seriedad y confianza (evaluar fit).
2. **Green** en CTAs y marca → crecimiento / que sí podemos ayudar.
3. **Teal** en eyebrows, focus ring, hovers → claridad en la conversación.
4. **Lime** solo como destello (stats, acentos) → progreso, sin saturar.
5. **Light** para tipografía principal sobre navy.
6. **Mint** para mensajes de éxito suaves (no verde neón).

## Variaciones semánticas (dark)

| Token CSS | Hex | Por qué |
|-----------|-----|---------|
| `--color-background` | `#031525` | Navy profundizado (más intimidad Apple) |
| `--color-surface-container-low` | `#0A2240` | Panel navy |
| `--color-on-surface` | `#F4F7FB` | INITLight |
| `--color-on-surface-variant` | `#94A3B8` | Gray alzado (AA sobre navy; `#6B7280` no pasa) |
| `--color-primary` | `#2BB855` | Green alzado para texto/links AA |
| `--color-primary-container` | `#146B36` | Green oscurecido; blanco pasa AA en botones |
| `--color-secondary` | `#00A7A7` | Teal literal |
| `--color-accent` | `#7ED957` | Lime literal |

### Contraste (verificado)

| Par | Ratio | AA |
|-----|-------|----|
| Light on navy profundo | ~17:1 | Pass |
| Primary `#2BB855` on `#031525` | ~7.1:1 | Pass |
| White on CTA `#146B36` | ~6.6:1 | Pass |
| Teal on `#031525` | ~6.2:1 | Pass |
| Lime on `#031525` | ~10.5:1 | Pass |
| Gray `#6B7280` on dark | ~3.8:1 | Fail → usar `#94A3B8` |
| White on green brand `#1E8F41` | ~4.15:1 | Fail en botón → usar `#146B36` |

## Escalas 50–950 (referencia)

Generadas con el skill `color-palette` (hue del brand, lightness steps).

### Green `#1E8F41`
50 `#f3fbf6` · 100 `#e8f8ed` · 200 `#ccf0d7` · 300 `#9ae5b1` · 400 `#62da88` · 500 `#2bca5d` · 600 `#24a84e` · 700 `#1d8b40` · 800 `#187234` · 900 `#125427` · 950 `#092a13`

### Navy `#062D55`
50 `#f2f7fd` · 100 `#e5f0fa` · 200 `#c5def6` · 300 `#8ebff1` · 400 `#4e9eef` · 500 `#107ae5` · 600 `#0d66bf` · 700 `#0b549d` · 800 `#094581` · 900 `#07335f` · 950 `#031a30`

### Teal `#00A7A7`
50 `#f1fdfd` · 100 `#e3fcfc` · 200 `#c2fafa` · 300 `#86f9f9` · 400 `#42fafa` · 500 `#00f5f5` · 600 `#00cccc` · 700 `#00a8a8` · 800 `#008a8a` · 900 `#006666` · 950 `#003333`

### Lime `#7ED957`
50 `#f6fbf4` · 100 `#edf7e8` · 200 `#d7f0cc` · 300 `#b1e49b` · 400 `#87d864` · 500 `#5cc82d` · 600 `#4ca626` · 700 `#3f891f` · 800 `#337019` · 900 `#265313` · 950 `#132a09`

## Skills instalados

- `color-palette` (jezweb) — escalas + tokens Tailwind v4 + contraste
- `color-expert` (meodai) — criterio de color avanzado
- `brand` (ya en repo) — governance de paleta
