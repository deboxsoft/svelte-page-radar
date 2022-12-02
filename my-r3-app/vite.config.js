import { svelte } from '@sveltejs/vite-plugin-svelte'
import routify from '@roxi/routify/vite-plugin'
import { defineConfig } from 'vite'
import { mdsvex } from 'mdsvex'
import  sveltePreprocess from 'svelte-preprocess'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
    clearScreen: false,

    plugins: [
        routify({
            ssr: { enable: false },
        }),
        svelte({
            compilerOptions: {
                dev: !production,
                hydratable: !!process.env.ROUTIFY_SSR_ENABLE,
            },
            extensions: ['.md', '.svelte'],
            preprocess: [sveltePreprocess(
            {postcss:{
                plugins:[tailwindcss()]
            }}
        )],
        }),
    ],

    server: { port: 1337 },
})
