export interface Sport {
  idSport: string;
  strSport: string;
  strFormat: string;
  strSportThumb: string;
  strSportIconGreen: string;
  strSportDescription: string;
}

export interface SportsResponse {
  sports: Sport[];
}

export interface Reaction extends Sport {
  reaction: number;
}