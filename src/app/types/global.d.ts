declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classnames: IClassNames;
    export = classnames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;