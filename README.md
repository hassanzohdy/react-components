# React Components

This package has some good and quick react components to be used.

## Installation

```bash
yarn add @mongez/react-components
```

## Not Found Component

This component is used to show a not found page.

```tsx
import { NotFound } from '@mongez/react-components';

<NotFound />
```

It will look like this:

![Not Found Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5llfh3np2th1xu4oowj2.png)

```tsx
import { NotFound } from '@mongez/react-components';
import { setRouterConfigurations } from '@mongez/react-router';

setRouterConfigurations({
    notFound: {
        mode: 'render',
        component: NotFound,
    }
});
```

Now any route that is not found will case a render to the `NotFound` component.

## Progress Component

This component is used to show a progress bar.

```tsx
import { Progress } from '@mongez/react-components';

<Progress />
```

If you want to control the progress, you can use the `value` prop.

```tsx
import { Progress } from '@mongez/react-components';

<Progress loading value={50} />
```

It looks like this:

![Progress Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/99kzuedy4fiezrxgcst4.gif)

To change progress height, you can use the `height` prop.

```tsx
import { Progress } from '@mongez/react-components';

<Progress height={5} />
```

To Change the color of the progress bar, you can use the `color` prop.

```tsx
import { Progress } from '@mongez/react-components';

<Progress loading value={50} color="red" />
```

To change the glow color, you can use the `glowColor` prop.

```tsx
import { Progress } from '@mongez/react-components';

<Progress loading value={50} color="red" glowColor="red" />
```

To change the glow effect height you can use the `glow` prop.

```tsx
import { Progress } from '@mongez/react-components';

<Progress loading value={50} color="red" glowColor="red" glow={25} />
```

Here is all available props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **loading** | `boolean` | `true` | If true, the progress will be shown automatically. |
| **value** | `number` | `undefined` | The progress value to be controlled |
| **height** | `number` | `5` | The progress bar height |
| **color** | `string` | `#21a6e9` | The progress bar color |
| **glowColor** | `string` | `#21a6e9` | The progress bar glow color |
| **glow** | `number` | `20` | The progress bar glow height |
