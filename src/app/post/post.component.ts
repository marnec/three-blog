import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, Type, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';
import { PostComponentType, PostName, dynamicRoutes } from '../app.routes';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements AfterContentInit {
  private readonly route = inject(ActivatedRoute);


  public id?: PostName;
  public componentType!: PostComponentType | null;
  public postPath?: string;

  async ngAfterContentInit() {
    const params = await firstValueFrom(this.route.paramMap);

    this.id = (params.get('id') || undefined) as PostName;

    this.componentType = dynamicRoutes.find((r) => r.path === this.id)?.component || null;

    const { baseHref, assetsFolder, postsFolder } = environment;

    this.postPath = `/${baseHref}/${assetsFolder}/${postsFolder}/${this.id}.md`;
  }
}
