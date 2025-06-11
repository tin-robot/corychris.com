

export const routes = {
  "meta": {},
  "id": "_default",
  "name": "",
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
      "meta": {},
      "id": "_default_about_svelte",
      "name": "about",
      "file": {
        "path": "src/routes/about.svelte",
        "dir": "src/routes",
        "base": "about.svelte",
        "ext": ".svelte",
        "name": "about"
      },
      "asyncModule": () => import('../src/routes/about.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_blog",
      "name": "blog",
      "module": false,
      "file": {
        "path": "src/routes/blog",
        "dir": "src/routes",
        "base": "blog",
        "ext": "",
        "name": "blog"
      },
      "children": [
        {
          "meta": {
            "dynamic": true,
            "order": false
          },
          "id": "_default_blog__slug__svelte",
          "name": "[slug]",
          "file": {
            "path": "src/routes/blog/[slug].svelte",
            "dir": "src/routes/blog",
            "base": "[slug].svelte",
            "ext": ".svelte",
            "name": "[slug]"
          },
          "asyncModule": () => import('../src/routes/blog/[slug].svelte'),
          "children": []
        },
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_blog_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/blog/index.svelte",
            "dir": "src/routes/blog",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/blog/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_experience_svelte",
      "name": "experience",
      "file": {
        "path": "src/routes/experience.svelte",
        "dir": "src/routes",
        "base": "experience.svelte",
        "ext": ".svelte",
        "name": "experience"
      },
      "asyncModule": () => import('../src/routes/experience.svelte'),
      "children": []
    },
    {
      "meta": {
        "isDefault": true
      },
      "id": "_default_index_svelte",
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
      "id": "_default_projects_svelte",
      "name": "projects",
      "file": {
        "path": "src/routes/projects.svelte",
        "dir": "src/routes",
        "base": "projects.svelte",
        "ext": ".svelte",
        "name": "projects"
      },
      "asyncModule": () => import('../src/routes/projects.svelte'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true,
        "order": false,
        "inline": false
      },
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
export default routes