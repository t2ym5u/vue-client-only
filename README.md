# vue-client-only

[![npm version](https://img.shields.io/npm/v/vue-client-only.svg)](https://www.npmjs.com/package/vue-client-only)
[![npm downloads](https://img.shields.io/npm/dm/vue-client-only.svg)](https://www.npmjs.com/package/vue-client-only)
[![CI](https://github.com/t2ym5u/vue-client-only/actions/workflows/ci.yml/badge.svg)](https://github.com/t2ym5u/vue-client-only/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/t2ym5u/vue-client-only/branch/main/graph/badge.svg)](https://codecov.io/gh/t2ym5u/vue-client-only)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5+-42b883.svg)](https://vuejs.org/)

A minimal Vue 3 component for client-side only rendering in SSR applications.

## Installation

```bash
# npm
npm install vue-client-only

# pnpm
pnpm add vue-client-only

# yarn
yarn add vue-client-only
```

## Usage

```vue
<script setup>
import { ClientOnly } from "vue-client-only";
</script>

<template>
  <ClientOnly>
    <!-- This content will only render on the client -->
    <MyBrowserOnlyComponent />

    <!-- Optional: show a fallback during SSR -->
    <template #fallback>
      <div>Loading...</div>
    </template>
  </ClientOnly>
</template>
```

## Why?

When using Vue with SSR (Nuxt, Vite SSR, etc.), some components:

- Access browser APIs (`window`, `document`, `localStorage`)
- Use third-party libraries that aren't SSR-compatible
- Cause hydration mismatches

`ClientOnly` prevents these components from rendering on the server, avoiding errors and hydration issues.

## API

### Slots

| Slot       | Description                                          |
| ---------- | ---------------------------------------------------- |
| `default`  | Content rendered only after Vue mounts on the client |
| `fallback` | Content rendered during SSR and before client mount  |

## Requirements

- Vue 3.5+

## License

[MIT](./LICENSE.md)
