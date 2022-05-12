module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-px-to-viewport')({ 
      viewportWidth: 750,
      viewportHeight: 1334, 
      unitPrecision: 3, 
      viewportUnit: "vw",
      selectorBlackList: ['.ignore'], // 指定不转换为视窗单位的类
      minPixelValue:1,
      mediaQuery:false,
    })
  ],



}