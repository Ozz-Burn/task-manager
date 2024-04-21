import type { Colors } from "@/shared/types"

export type ButtonTypes = 'filled' | 'text' | 'bordered' | 'icon'

export interface IProps {
  type: ButtonTypes
  color: Colors
}
