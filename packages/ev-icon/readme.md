## ev-icon

### Features

- [x] Tree-shaking
- [x] SSR-safe
- [x] Agnostic framework
- [x] Dynamic props
- [ ] Minimum initial load
- [ ] Simplicity
- [x] Minimum bundle
- [ ] Automatic Dom Manage

### Examples

How to use in react

```jsx
import { svgHome } from "ev-icon"; // this will use and setup automatically

const TestIcon = () => {
  return <ev-icon svg={svgHome} className="text-blue-500" />;
};
```

How to use in Astro

```md
---
import { svgHome } from "ev-icon"; // to use the icon
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
    <script>
      import "ev-icon"; // to set-up on client
    </script>
  </head>
  <body>
    <ev-icon svg={svgHome}></ev-icon>
  </body>
</html>
```

### Comparisons

A Empty react component loading icons

- with all the icons 2.6mb
- with 1 icon 2kb
- with 10 icons 15kb

An large application loading Icons from Font awesome vs loading from ev-icon-library
