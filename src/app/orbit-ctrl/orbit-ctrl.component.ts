import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  DoubleSide,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShadowMaterial,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { SceneBuilder } from '../scene-builder';

@Component({
  selector: 'app-orbit-ctrl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orbit-ctrl.component.html',
  styleUrl: './orbit-ctrl.component.scss'
})
export class OrbitCtrlComponent {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  scene!: Scene;
  camera!: PerspectiveCamera;
  renderer!: WebGLRenderer;
  controls!: OrbitControls;
  composer!: EffectComposer;

  width!: number;
  height!: number;

  ngAfterViewInit(): void {
    const { clientHeight, clientWidth } = this.canvasRef.nativeElement;

    this.width = clientWidth
    this.height = clientHeight

    this.scene = new SceneBuilder().build();

    this.camera = new PerspectiveCamera(45, this.width / this.height, 0.01, 1000);
    this.camera.position.set(5, 5, 5);

    this.controls = new OrbitControls(this.camera, this.canvasRef.nativeElement);
    this.controls.target.set(0, 0, 0);
    this.controls.maxPolarAngle = Math.PI / 2.1;

    const ambientLight = new AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 0.97);
    directionalLight.position.set(5, 5.93, -5);

    this.scene.add(directionalLight);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.setScalar(2048);
    directionalLight.shadow.bias = -1e-4;
    directionalLight.shadow.normalBias = 1e-4;

    this.renderer = new WebGLRenderer({ canvas: this.canvasRef.nativeElement });
    this.renderer.setSize(this.width, this.height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;

    const geometry = new BoxGeometry();
    const material = new MeshStandardMaterial({
      flatShading: true,
      color: 0xffffff,
      emissive: 0xfffdd0,
      emissiveIntensity: 0.35,
      polygonOffset: true,
      polygonOffsetUnits: 1,
      polygonOffsetFactor: 1,
    });
    const cube = new Mesh(geometry, material);
    cube.position.y = 0.5;
    cube.castShadow = true;
    this.scene.add(cube);

    const floorGeometry = new PlaneGeometry(10, 10);
    const floorMaterial = new ShadowMaterial({ color: 0xd81b60, transparent: true, opacity: 0.075, side: DoubleSide });
    const floor = new Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    window.addEventListener('resize', () => this.onWindowResize());
    
    this.onWindowResize();
    
    this.controls.autoRotate = true;
  }

  update() {
    requestAnimationFrame(() => this.update());

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
    this.update();
  }
}





