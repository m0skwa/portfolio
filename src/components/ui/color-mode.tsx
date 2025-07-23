"use client"

import type { IconButtonProps, SpanProps } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react"
import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

export interface ColorModeProviderProps extends ThemeProviderProps {
  /**
   * Whether to enable smooth transition when changing color modes
   * @default true
   */
  enableTransition?: boolean
  /**
   * Default color mode ("light" | "dark" | "system")
   * @default "system"
   */
  defaultMode?: "light" | "dark" | "system"
}

export function ColorModeProvider({
  enableTransition = true,
  defaultMode = "system",
  ...props
}: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange={!enableTransition}
      defaultTheme={defaultMode === "system" ? undefined : defaultMode}
      {...props}
    />
  )
}

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
  isSystem: boolean
  modes: ColorMode[]
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const colorMode = (forcedTheme || resolvedTheme || "light") as ColorMode
  const isSystem = !forcedTheme

  const toggleColorMode = React.useCallback(() => {
    setTheme(colorMode === "dark" ? "light" : "dark")
  }, [colorMode, setTheme])

  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode,
    isSystem,
    modes: ["light", "dark"],
  }
}

export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

export interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {
  iconSize?: string | number
  isLoading?: boolean
}

export const ColorModeButton = React.forwardRef<HTMLButtonElement, ColorModeButtonProps>(
  function ColorModeButton({ iconSize = "5", isLoading, ...props }, ref) {
    const { toggleColorMode } = useColorMode()

    return (
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
          size="sm"
          ref={ref}
          {...props}
          css={{
            _icon: {
              width: iconSize,
              height: iconSize,
            },
          }}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    )
  }
)

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  }
)

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    )
  }
)