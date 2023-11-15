import { Camera, PerspectiveCamera } from 'three';
import { CameraData } from './constants';

export class CameraBuilder {
  camera!: Camera;

  constructor() {}

  perspectiveCamera(canvas: HTMLCanvasElement): CameraBuilder {
    const { clientWidth, clientHeight } = canvas;

    const { fov, near, far } = CameraData;

    this.camera = new PerspectiveCamera(fov, clientWidth / clientHeight, near, far);
    this.camera.position.set(5, 5, 5);

    return this;
  }


  build(): Camera {
    return this.camera;
  }
}
