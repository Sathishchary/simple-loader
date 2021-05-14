import { NgModule } from '@angular/core';
import { SimpleLoaderLibComponent } from './simple-loader-lib.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [SimpleLoaderLibComponent, LoaderComponent],
  imports: [
    FormsModule, CommonModule
  ],
  exports: [SimpleLoaderLibComponent, LoaderComponent]
})
export class SimpleLoaderLibModule { }
