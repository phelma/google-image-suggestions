google image search suggestions

![](screenshot.jpg)

usage

```js
let suggestions = require('google-image-suggestions');
suggestions.get('fish', (err, res) => {
  console.log(JSON.stringres);
});

// {
//   suggestions: true,
//   list: [
//     { full: 'fish clipart',  extra: 'clipart'  },
//     { full: 'cooked fish',   extra: 'cooked'   },
//     { full: 'fish to eat',   extra: 'to eat'   },
//     { full: 'fish drawing',  extra: 'drawing'  },
//     { full: 'tropical fish', extra: 'tropical' },
//     { full: 'goldfish',      extra: 'goldfish' }
//   ]
// }

```

cli

`$ google-image-suggest fish`

```
Suggestions:
  fish clipart
  cooked fish
  fish to eat
  fish drawing
  tropical fish
  goldfish
```
