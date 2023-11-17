import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CardComponent } from '../card/card.component';
import { dynamicRoutes } from '../app.routes';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MarkdownModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public dynamicRoutes = dynamicRoutes;
  public postsFolder = environment.postsFolder;

  public mainPath = `/${environment.baseHref}/${environment.assetsFolder}/main.md`
}
