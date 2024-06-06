declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'vite/client' {
  const content: any;
  export default content;
}