
##  SimpleLoader
[demo](https://simple-loader.stackblitz.io/) | [See the code in StackBlitz](https://stackblitz.com/edit/simple-loader).

## Getting Started

### Installation

Install via npm package manager 

```bash
npm i simple-loader-lib
```
### Versions

2.0.0 - for Angular v20.x.x and above


### Usage

Import `simple-loader-lib` module

```js
import { HttpClientModule} from '@angular/common/http';
import { SimpleLoaderLibModule } from 'simple-loader-lib';

@NgModule({
  imports: [ HttpClientModule, SimpleLoaderLibModule ]
})
```

Then in HTML

```html
<sk-simple-loader-lib [loading]="true"></sk-simple-loader-lib>
```

The library also exports additional loader components that can be used
directly:

```html
<sk-bounce-loader></sk-bounce-loader>
<sk-spinner-loader></sk-spinner-loader>
```

## Creators

**Sathish Kotha**

* <https://github.com/sathishchary>

[example]: https://stackblitz.com/edit/angular-editor-wysiwyg
