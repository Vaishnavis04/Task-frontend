import reactPlugin from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
};
