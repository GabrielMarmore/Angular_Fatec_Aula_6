import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
})
export class JurosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;
  valores: Array<Number>;

  constructor() {
    this.vp = 100;
    this.j = 2.5;
    this.n = 3;
    this.valores = [];
  }

  ngOnInit() {}

  getJuros() {
    for (var c = 0; c < this.n; c++) {
      this.valores.push(this.vp * Math.pow(1 + this.j / 100, c));
    }
    return this.valores;
    //return this.vp * Math.pow(1 + this.j / 100, this.n);
  }
}
