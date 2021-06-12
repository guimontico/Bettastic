export interface BasketGames {
    id: number,
    date: string;
    time: string,
    timestamp: number,
    timezone: string,
    stage: any,
    week: any,
    status ?: (Status) | null;
    league ?: (League) | null;
    country ?: (Country) | null;
    teams ?: (Teams) | null;
    scores ?: (Scores) | null;
  }
  export interface Status {
    long: string,
    short: string,
    timer: string | null
  }
  export interface League {
    id: number,
    name: string,
    type: string,
    season: string,
    logo: string | null
  }
  export interface Country {
    id: number,
    name: string,
    code: string,
    flag: string
  }
  export interface Teams {
    home: (Home),
    away: (Away)
    }
  export interface Home {
    id: number,
    name: string,
    logo: string | null
  }
  export interface Away {
    id: number,
    name: string,
    logo: string | null
  }
  export interface Scores {
    home: (HomeScore),
    away: (AwayScore)
  }
  export interface HomeScore {
    quarter_1: number,
    quarter_2: number,
    quarter_3: number,
    quarter_4: number,
    over_time: number | null,
    total: number
  }
  export interface AwayScore {
    quarter_1: number,
    quarter_2: number,
    quarter_3: number,
    quarter_4: number,
    over_time: number | null,
    total: number
  }