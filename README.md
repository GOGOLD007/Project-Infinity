# Project-Infinity
A modern (1.20.1) modpack centered around Greg Tech with some magic mods and heavy automation

**Minecraft 1.20.1 · Forge 47.4.29 · managed with [packwiz](https://packwiz.infra.link/)**

## Current mods

| Mod | Role |
| --- | --- |
| GregTech CEu Modern | Core tech progression |
| KubeJS (+ Rhino, Architectury API) | Recipe changes and progression gating |
| Applied Energistics 2 (+ GuideME) | Storage and autocrafting |
| Create | Early-game mechanical automation |
| JEI (+ MezzConfig) | Recipe viewer |
| Jade | Block/entity info overlay |
| Botania | Nature/mana magic; very automatable, fits beside Create |
| Ars Nouveau | Spellcrafting plus automation (Sourcelinks, relays, Starbuncles) |
| Occultism | Spirit workers for item transport, ore processing and storage |
| Blood Magic | Altar and ritual progression; good for mid/late gating |
| Patchouli, Curios API, GeckoLib, SmartBrainLib, Modonomicon | Libraries required by the magic mods |

### Progression gating (KubeJS)

Recipe changes live in `kubejs/server_scripts/progression/`, one file per GregTech tier:

| Tier | Changes |
| --- | --- |
| Steam (`00_steam.js`) | Mana Spreader, Blood Altar and Imbuement Chamber need bronze or gold plates |
| LV (`01_lv.js`) | Runic Altar needs steel plates; Enchanting Apparatus and Alchemy Table need LV circuits; AE2 Inscriber needs LV Electric Pistons; new Alloy Smelter recipe: iron + mana powder makes Manasteel |
| MV (`02_mv.js`) | Terrestrial Agglomeration Plate needs an MV circuit; AE2 ME Controller can only be made in an MV Assembler |

Planned next: Blood Magic altar tiers gating GregTech HV parts, and Occultism ore processing next to GregTech's.

A quest mod is still to be chosen. FTB Quests is only on CurseForge, so adding it needs `packwiz curseforge add`.

## Layout

```
pack.toml          pack metadata (name, MC + Forge versions)
index.toml         generated list of every file in the pack (don't edit by hand)
mods/*.pw.toml     one metadata file per mod (download URL + hash, no jars)
kubejs/
  startup_scripts/ register items, blocks, GT materials (needs restart)
  server_scripts/  recipe changes (/reload)
  client_scripts/  tooltips, JEI tweaks
```

## Working on the pack

Install packwiz (needs Go): `go install github.com/packwiz/packwiz@latest`

```sh
packwiz modrinth add <slug-or-url>     # add a mod from Modrinth
packwiz curseforge add <slug-or-url>   # add a mod from CurseForge
packwiz remove <name>                  # remove a mod
packwiz update --all                   # update every mod
packwiz refresh                        # rebuild index.toml after editing files by hand
```

Run `packwiz refresh` and commit after changing anything under `kubejs/` or `config/`.

## Playing / testing

- **Modrinth / Prism import:** `packwiz modrinth export` makes a `.mrpack` file.
- **CurseForge import:** `packwiz curseforge export` makes a `.zip` file.
- **Live-syncing a test instance:** run `packwiz serve`, and point
  [packwiz-installer-bootstrap](https://github.com/packwiz/packwiz-installer-bootstrap)
  in a Prism/MultiMC pre-launch command at `http://localhost:8080/pack.toml`.
