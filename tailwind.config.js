/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				bebas: ["Bebas Neue", "serif"],
				code: ["Source Code Pro", "serif"],
				jersey: ["Jersey 15", "serif"],
				play: ["Playwrite AU VIC Guides", "serif"],
				indie: ["Indie Flower", "serif"],
				jura: ["Jura", "serif"],
			},
			colors: {
				gold: '#FFD700',
			},
			textShadow: {
				neon: '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
			  '.text-gold-neon': {
				color: '#fff', 
				textShadow:
				  '0 0 2px #FFD700, 0 0 10px #FFD700, 0 0 5px rgba(255, 215, 0, 0.8)', 
			  },
			});
		},
	],
};
