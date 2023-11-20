import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterPlot } from 'threeplot';
import { Vector3 } from 'three';

@Component({
  selector: 'app-plot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plot.component.html',
  styleUrl: './plot.component.scss',
})
export class PlotComponent implements AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const plot = new ScatterPlot(10, 10, 10).withData([new Vector3()]);
    plot.showOn(this.canvas.nativeElement);
  }
}
