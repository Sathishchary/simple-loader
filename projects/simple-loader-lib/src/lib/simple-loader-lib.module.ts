import { NgModule } from '@angular/core';
import { SimpleLoaderLibComponent } from './simple-loader-lib.component';
import { LoaderComponent } from './loader/loader.component';
import { BounceLoaderComponent } from './bounce-loader/bounce-loader.component';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    SimpleLoaderLibComponent,
    LoaderComponent,
    BounceLoaderComponent,
    SpinnerLoaderComponent
  ],
  imports: [
    FormsModule, CommonModule
  ],
  exports: [
    SimpleLoaderLibComponent,
    LoaderComponent,
    BounceLoaderComponent,
    SpinnerLoaderComponent
  ]
})
export class SimpleLoaderLibModule { }
