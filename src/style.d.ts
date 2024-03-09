declare module "*.module.css" {
  interface CSSModule {
    [key:string]: string;
  }

  const styles: CSSModule;
  export default styles
}
