
##  SimpleLoader
[demo](https://simple-loader.stackblitz.io/) | [See the code in StackBlitz](https://stackblitz.com/edit/simple-loader).

## Output

<p align="center">
  <img width="150px" src="https://raw.githubusercontent.com/Sathishchary/simple-loader/master/docs/loader.gif" alt="AngularEditor logo"/>
</p>

## Getting Started

### Installation

Install via [npm][npm] package manager 

```bash
npm i simple-loader-lib
```
### Versions

0.0.1 - for Angular v11.x.x and above


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

## Creators

**Sathish Kotha**

* <https://github.com/sathishchary>

[example]: https://stackblitz.com/edit/angular-editor-wysiwyg
