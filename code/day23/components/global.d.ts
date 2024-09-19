// ▶ 타입스크립트에서 CSS확장자 인식하게 설정
declare module "*.css" {
    const content: {[className: string]: string};
    export = content;
}