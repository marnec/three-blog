import { Injectable } from '@angular/core';
import { Scene } from 'three';
import { Theme } from './constants';

@Injectable({ providedIn: 'root' })
export class SceneBuilder {
  private scene!: Scene;

  constructor() {
    this.scene = new Scene();
    this.scene.background = Theme.backgroundColor;
  }

  build(): Scene {
    return this.scene;
  }
}
