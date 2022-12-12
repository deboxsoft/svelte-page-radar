

export default {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "asyncModule": () => import('../src/routes/_module.svelte'),
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {
        "dynamic": true
      },
      "id": "_default__magig__svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "[magig]",
      "file": {
        "path": "src/routes/[magig].svelte",
        "dir": "src/routes",
        "base": "[magig].svelte",
        "ext": ".svelte",
        "name": "[magig]"
      },
      "asyncModule": () => import('../src/routes/[magig].svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_bab_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "bab",
      "file": {
        "path": "src/routes/bab.svelte",
        "dir": "src/routes",
        "base": "bab.svelte",
        "ext": ".svelte",
        "name": "bab"
      },
      "asyncModule": () => import('../src/routes/bab.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_profile_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "profile",
      "file": {
        "path": "src/routes/profile.svelte",
        "dir": "src/routes",
        "base": "profile.svelte",
        "ext": ".svelte",
        "name": "profile"
      },
      "asyncModule": () => import('../src/routes/profile.svelte'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}