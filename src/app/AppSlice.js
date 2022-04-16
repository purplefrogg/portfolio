import { createSlice } from "@reduxjs/toolkit"
import { cryptoappImg, homeworkappImg, realtorappImg } from "../assets"

const initialState = {
  theme: "dark",
  projects: [
    {
      id: 1,
      name: "Home Work",
      image: homeworkappImg,
      githubUrl: "https://github.com/purplefrogg/home-work",
      website: "https://home-work-topaz.vercel.app/",
    },
    {
      id: 2,
      name: "Crypto Currency",
      image: cryptoappImg,
      githubUrl: "https://github.com/purplefrogg/cryptoapp",
      website: "https://cryptoapp-ebon.vercel.app/",
    },
    {
      id: 3,
      name: "Realtor",
      image: realtorappImg,
      githubUrl: "https://github.com/purplefrogg/project_realtorState",
      website: "https://realtor-state.vercel.app/",
    },
  ],
}

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark"
    },
    toggleMenu: (state) => {
      state.toggleMenu = state.toggleMenu === "lock_body" ? "" : "lock_body"
    },
  },
})
export const { toggleTheme,toggleMenu } = appSlice.actions
export default appSlice.reducer
