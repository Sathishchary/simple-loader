import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sk-simple-loader-lib',
  template: `
  <sk-loader *ngIf="loading"></sk-loader>
  `,
  styles: []
})
export class SimpleLoaderLibComponent implements OnInit {

  @Input() loading = false;
  constructor() { }

  ngOnInit() {
  }

}
