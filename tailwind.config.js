module.exports = {
  content: ['./src/**/*.{vue,js,ts}'], // 配置 TailwindCSS 需要处理的文件路径
  plugins: [
    require('daisyui'), // 导入 daisyUI 插件
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#43a2a0",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#92d3cd",
          "base-100": "#fff1c8",

          "primary-content": "#3c3c3c",
          "secondary-content": "#f6d860",
          "accent-content": "#37cdbe",
          "neutral-content": "#f9f9f9",
          "base-100-content": "#3c3c3c",

          "--rounded-box": "1rem", // 卡片和大盒子的圆角
          "--rounded-btn": "0.5rem", // 按钮的圆角
          "--rounded-badge": "1.9rem", // 徽章的圆角
          "--animation-btn": "0.25s", // 按钮点击动画的持续时间
          "--animation-input": "0.2s", // 输入框（如复选框、切换、单选）的动画持续时间
          "--btn-focus-scale": "0.95", // 按钮聚焦时的缩放比例
          "--border-btn": "1px", // 按钮的边框宽度
          "--tab-border": "1px", // 标签页的边框宽度
          "--tab-radius": "0.5rem", // 标签页的圆角
        },
      },
    ],
  },
};

