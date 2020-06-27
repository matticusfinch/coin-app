export class Side {
  Obverse: string;
  Reverse: string;
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
}
