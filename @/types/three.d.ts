import 'three';

declare module 'three' {
  interface Material {
    transparent?: boolean;
  }
}
