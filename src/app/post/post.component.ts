import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  public id?: string;

  async ngOnInit() {
    const params = await firstValueFrom(this.route.params);
    console.log(params);

    this.id = params['id'];
  }
}
