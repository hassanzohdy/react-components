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

## Progress Component

This component is used to show a progress bar.

```tsx
import { Progress } from '@mongez/react-components';

<Progress loading />
```

If you want to control the progress, you can use the `progress` prop.

```tsx
import { Progress } from '@mongez/react-components';

<Progress loading progress={50} />
```