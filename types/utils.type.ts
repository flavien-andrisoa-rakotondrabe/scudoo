export type ThemeType = "system" | "dark" | "light";

export type ResolvedThemeType = Exclude<ThemeType, "system">;
