module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-px-to-viewport')({ 
      viewportWidth: 375,
      viewportHeight: 667, 
      unitPrecision: 3, 
      viewportUnit: "vw",
      selectorBlackList: ['.ignore'], // 指定不转换为视窗单位的类
      minPixelValue:1,
      mediaQuery:false,
    })
  ],



}