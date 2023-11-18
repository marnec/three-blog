import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plot } from 'threeplot';

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
    const plot = new Plot(10, 10, 10);
    plot.showOn(this.canvas.nativeElement);
  }
}
