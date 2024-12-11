```
npm create vite@latest project-name -- --template react-ts
```

vite 创建项目

```
   @ton/ton @ton/core @ton/crypto @orbs-network/ton-access vite-plugin-node-polyfills
```

安装这些依赖

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: "/",
});
```

配置插件

```
npm install @tonconnect/ui-react

```

装 react 组件，ton connect
