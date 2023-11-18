import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { OrbitCtrlComponent } from './scenes/orbit-ctrl/orbit-ctrl.component';
import { PlotComponent } from './plot/plot.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'posts/:id',
    component: PostComponent,
  },
  {
    path: 'test',
    component: PlotComponent
  }
];

export const dynamicRoutes = [
  {
    path: 'orbit-ctrl',
    component: OrbitCtrlComponent,
    title: 'Orbit Controls',
    abstract: 'Orbit controls are a set of tools to easily manipulate the camera position',
  },
] as const;

export type PostName = (typeof dynamicRoutes)[number]['path'];
export type PostComponentType = (typeof dynamicRoutes)[number]['component'];
