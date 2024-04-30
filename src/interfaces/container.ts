export interface IContainer {
  readonly value: string;
  readonly type: string;
  readonly href?: string;
}

export interface IGallery {
  readonly items: string[];
}

export interface ILink {
  readonly href?: string;
  readonly value: string;
}

export interface IText {
  readonly value: string;
}
