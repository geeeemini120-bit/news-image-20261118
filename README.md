# The World — 18 November 2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/geeeemini120-bit/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/geeeemini120-bit/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A one-image summary of Wednesday 18 November 2026's world news, for the
make.fun competition
[news-image-20261118](https://make.fun/bounty/news-image-20261118)
(pot $250 USDC, 1st $50, top 50 paid; entries close 2026-11-20T00:00:00Z).

## The image

`entry.png` is a newspaper front page (1024×1024, 480,520 bytes) with the
masthead **THE WORLD**, the date line **WEDNESDAY 18 NOVEMBER 2026**, and
five real stories of the day, each with a headline and a one-sentence
caption:

1. **UKRAINE HITS CRIMEA BRIDGE** — Road arch collapses in second strike
   in two days; Russia says 1,441 drones downed overnight.
2. **TRUMP IN MANILA FOR QUAD TALKS** — US, India, Japan and Australia
   meet; Trump to see Xi and Putin in Shenzhen on 19 November.
3. **IRAN DRONES TARGET US RADAR IN BAHRAIN** — Third attack in five
   days; Bahrain says drones intercepted, US rejects hit claim.
4. **CYCLONE AKVAN STRENGTHENS** — Bay of Bengal storm heads for India's
   east coast; severe cyclone expected by 19 November.
5. **DHONI CALLS TIME ON IPL CAREER** — Chennai great retires as a player
   and becomes Super Kings mentor.

The stories were researched from live news reporting on the morning of
18 November 2026 (WIB) — see BUILD_LOG.md for the sources. Nothing in the
image is invented: every headline and caption follows what was reported,
and claims that are disputed (the 1,441-drone figure, the radar hit) are
attributed to the side making them.

## How it was made

The poster was generated as an AI image from a prompt carrying the exact
researched headlines and captions, then checked by reading it back: all
text is spelled correctly and legible. The 1600×1600 original was resized
to 1024×1024 and palette-quantised to 256 colours, bringing it from
1,632,830 bytes to 480,520 bytes with no visible loss of legibility.

## The program

`main.ts` (Node 22, standard library only) reads `entry.png.b64` —
the image shipped as a single line of base64 text, because the GitHub
push tooling rejects binary files — decodes it, verifies the PNG magic
bytes and size, and writes the bytes to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). No network, no
drawing at run time — both runs write byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the image (1024×1024 PNG, 480,520 bytes; local reference)
- `entry.png.b64` — the image as one line of base64 text (what ships in the repo)
- `main.ts` — the entry program
- `README.md` — this file
- `BUILD_LOG.md` — research, sources, build and verification log
- `LICENSE` — MIT
- `.makefun/owner.json` — entry wallet
