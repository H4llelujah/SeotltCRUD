declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classnames: IClassNames;
    export = classnames;
}

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;