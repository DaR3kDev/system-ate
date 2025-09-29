declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  /**
   * Componente
   * P = Props
   * E = Emits
   * S = Slots
   */
  type TypedComponent<
    P extends Record<string, unknown> = {},
    E extends Record<string, (...args: unknown[]) => void> = {},
    S extends Record<string, unknown> = {},
  > = DefineComponent<P, {}, {}, {}, {}, {}, E, S>

  const component: TypedComponent
  export default component
}
