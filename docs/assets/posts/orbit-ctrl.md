# Orbit Controls

[Orbit Controls](https://threejs.org/docs/#examples/en/controls/OrbitControls) are one of the _controls_ helper functions.

Controls helpers simplify manipulating the camera position.

In particular, orbit controls move a camera relatively to a target point ($\textbf{t}$), represented by a vector $\textbf{t} \in \mathbb{R}^3$.

The orbit controls let the user:

- rotate the camera around the target
- pan the camera and consequently move the target point
- zoom the camera towards and from the target point

## Rotate the camera around a target

By looking a the `OrbitControls` implementation what is essentially happening can be broken down in

1. Track the start and end position of the mouse while dragging
2. Calculate the vector between the start and end position
3. Calculate the $x$ and $y$ axes spherical coordinates delta
4. Update the spherical coordinates of the camera

Tracking the mouse start and end position is achieved by listening to two [MouseEvents](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent): `mousedown` and `mousemove`

The event-listeneres are attached to the [DOM Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) passed to the `OrbitControl` class at instantiation

```typescript
const controls = new OrbitControls(camera, renderer.domElement);
```

The start position $p_0$ is stored on `mousedown`, which marks the start of the drag action, the end position $p_1$ is stored on `mousemove`

The vector 


