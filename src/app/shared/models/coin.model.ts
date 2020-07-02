export class Side {
  Obverse: string;
  Reverse: string;
  reverseLink: string;
  obverseLink: string;
}

export class Variety {
  type: string;
  name: string;
}

export class Coin {
  denom: string;
  description: string;
  img: string;
  year: number;
  edge: string;
  mintedBy: string;
  mintMark: string;
  mintage: number;
  monarch: string;
  monarchImg: string;
  size: string;
  composition: string;
  designer: Side;
  engraver: Side;
  diameter: number;
  dieAxis: string;
  weight: number;
  varieties: Variety[];
  monarchLink: string;
  mintLink: string;
}
