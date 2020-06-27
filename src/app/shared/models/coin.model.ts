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
  mintMark: string;
  mintage: number;
  monarch: string;
  monarchImg: string;
  size: string;
  composition: string;
  designer: Side;
  diameter: number;
  dieAxis: string;
  engraver: Side;
  mintedBy: string;
  weight: number;
}
