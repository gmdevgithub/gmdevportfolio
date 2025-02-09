declare module '*.svg' {

    const content: string;
  
    export default content;
  
  }

  declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
  }

  //This tells TypeScript that when you import an .svg file, it should treat the content as a string.