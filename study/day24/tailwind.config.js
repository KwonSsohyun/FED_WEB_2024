/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{ts,tsx}'],  // ▶ Tailwind CSS가 적용될 파일
  theme: {
    extend: {
      spacing: {
        '96' : '10rem'
      }
    },
  },
  plugins: [],
}