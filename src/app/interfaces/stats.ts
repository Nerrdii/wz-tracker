export interface IStats {
  [mode: string]: IStat;
}

interface IStat {
  cash: number;
  contracts: number;
  deaths: number;
  downs: number;
  gamesPlayed: number;
  kdRatio: number;
  kills: number;
  revives: number;
  score: number;
  scorePerMinute: number;
  timePlayed: number;
  title: string;
  topFive: number;
  topTen: number;
  topTwentyFive: number;
  wins: number;
}
