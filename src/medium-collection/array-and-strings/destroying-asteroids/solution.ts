export function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
  asteroids.sort((a, b) => a - b);
  for (const asteroid of asteroids) {
    if (mass < asteroid) {
      return false;
    }
    mass += asteroid;
  }

  return true;
}
