/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Navbar: "rgba(92, 79, 5, 0.44)",
        NavbarBorder: "rgba(255, 255, 255, 0.31)",
        right: "rgba(255, 255, 255, 0.31)",
        left: "rgba(255, 255, 255, 0)",
        mainButton: "rgba(249, 211, 38, 1)",
        secondColor: "rgba(254, 204, 0, 1)",
        loremColor: "#FDFFE3",
        buttonBg: "rgba(254, 204, 0, 1)",
        buttonBg1: "rgba(254, 168, 0, 1)",
        bitCoinColor: "rgba(254, 204, 0, 1)",
        D_grey: "#4D4D4D",
        Grey: "#717171",
        L_grey: "#89939E",
        Grey_blue: "#ABBED1",
        Silver: "#F5F7FA",
        Primary: "#28CB8B",
        Secondary: "#263238",
        Info: "#2194f3",
        Shade1: "#43A046",
        Shade2: "#388E3B",
        Shade3: "#237D31",
        Shade4: "#1B5E1F",
        Shade5: "#103E13",
        InputInner: "#515B60"
      }
    },
  },
  plugins: [
  ]
}