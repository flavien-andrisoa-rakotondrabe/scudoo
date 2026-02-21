import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_THEME } from "@/constants/utils";

import { ResolvedThemeType, ThemeType } from "@/types/utils.type";

interface UserStoreType {
  theme: ThemeType;
  resolvedTheme: ResolvedThemeType;
}

const initialState: UserStoreType = {
  theme: "system",
  resolvedTheme: DEFAULT_THEME,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    updateUtilsReducer(
      state,
      action: PayloadAction<{
        theme?: ThemeType;
        resolvedTheme?: ResolvedThemeType;
      }>,
    ) {
      const { theme, resolvedTheme } = action.payload;

      if (theme) {
        state.theme = theme;
      }
      if (resolvedTheme) {
        state.resolvedTheme = resolvedTheme;
      }
    },
  },
});

export const { updateUtilsReducer } = utilsSlice.actions;
export default utilsSlice.reducer;
