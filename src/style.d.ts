declare module '*.module.css' {
  interface CSSModule {
    [key: string]: string;
  }

  const styles: CSSModule;
  export default styles;
}

declare module 'csstype' {
  interface Properties {
    '--guideline-display-type': string;
    '--guideline-display-position': `${number}px`;
    '--timeline-height': `${number}px`;
  }
}
