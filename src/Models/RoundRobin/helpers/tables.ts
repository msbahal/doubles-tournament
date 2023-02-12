export type IsTable = TableOfTeams | TableOfPlayers;
type TableOfTeams = [Team];

export const tablesForFixedRR = function (
  numberOfTeams: number,
): TableOfTeams[] {
  const tables: TableOfTeams[] = [];

  for (let i = 0; i < Math.floor(numberOfTeams / 2); i++) {
    let table: Team = {};
    table[i] = null;
    table[numberOfTeams - i - 1] = null;
    tables.push([table]);
  }

  return tables;
};

interface Team {
  [key: string]: string | null;
}

export type TableOfPlayers = [Team, Team];

export interface Tables {
  [key: string]: TableOfPlayers[] | TableOfTeams[];
}

export const tablesForSwitchRR: Tables = {
  4: [
    [
      { 1: null, 2: null },
      { 3: null, 0: null },
    ],
  ],
  5: [
    [
      { 2: null, 3: null },
      { 4: null, 1: null },
    ],
  ],

  8: [
    [
      { 2: null, 3: null },
      { 4: null, 6: null },
    ],
    [
      { 5: null, 1: null },
      { 7: null, 0: null },
    ],
  ],
  9: [
    [
      { 1: null, 2: null },
      { 3: null, 6: null },
    ],
    [
      { 4: null, 8: null },
      { 5: null, 7: null },
    ],
  ],
  12: [
    [
      { 2: null, 3: null },
      { 1: null, 6: null },
    ],
    [
      { 8: null, 10: null },
      { 4: null, 7: null },
    ],
    [
      { 5: null, 9: null },
      { 11: null, 0: null },
    ],
  ],
  13: [
    [
      { 3: null, 4: null },
      { 2: null, 8: null },
    ],
    [
      { 5: null, 7: null },
      { 10: null, 1: null },
    ],
    [
      { 9: null, 12: null },
      { 6: null, 11: null },
    ],
  ],
  16: [
    [
      { 12: null, 13: null },
      { 3: null, 9: null },
    ],
    [
      { 4: null, 6: null },
      { 14: null, 2: null },
    ],
    [
      { 7: null, 11: null },
      { 5: null, 10: null },
    ],
    [
      { 1: null, 8: null },
      { 15: null, 0: null },
    ],
  ],
  17: [
    [
      { 14: null, 15: null },
      { 2: null, 4: null },
    ],
    [
      { 5: null, 8: null },
      { 7: null, 13: null },
    ],
    [
      { 12: null, 16: null },
      { 1: null, 9: null },
    ],
    [
      { 6: null, 11: null },
      { 3: null, 10: null },
    ],
  ],
  20: [
    [
      { 14: null, 15: null },
      { 19: null, 0: null },
    ],
    [
      { 16: null, 18: null },
      { 1: null, 10: null },
    ],
    [
      { 4: null, 7: null },
      { 6: null, 13: null },
    ],
    [
      { 5: null, 9: null },
      { 12: null, 17: null },
    ],
    [
      { 2: null, 8: null },
      { 3: null, 11: null },
    ],
  ],
  21: [
    [
      { 9: null, 10: null },
      { 4: null, 7: null },
    ],
    [
      { 15: null, 17: null },
      { 8: null, 16: null },
    ],
    [
      { 2: null, 6: null },
      { 13: null, 18: null },
    ],
    [
      { 14: null, 20: null },
      { 3: null, 12: null },
    ],
    [
      { 19: null, 5: null },
      { 1: null, 11: null },
    ],
  ],
  24: [
    [
      { 17: null, 18: null },
      { 3: null, 13: null },
    ],
    [
      { 20: null, 22: null },
      { 6: null, 9: null },
    ],
    [
      { 15: null, 19: null },
      { 8: null, 16: null },
    ],
    [
      { 5: null, 10: null },
      { 2: null, 11: null },
    ],
    [
      { 21: null, 4: null },
      { 23: null, 0: null },
    ],
    [
      { 7: null, 14: null },
      { 1: null, 12: null },
    ],
  ],
  25: [
    [
      { 5: null, 6: null },
      { 1: null, 13: null },
    ],
    [
      { 20: null, 22: null },
      { 11: null, 19: null },
    ],
    [
      { 21: null, 24: null },
      { 2: null, 12: null },
    ],
    [
      { 4: null, 8: null },
      { 18: null, 23: null },
    ],
    [
      { 9: null, 15: null },
      { 10: null, 17: null },
    ],
    [
      { 7: null, 16: null },
      { 3: null, 14: null },
    ],
  ],
  28: [
    [
      { 22: null, 23: null },
      { 1: null, 14: null },
    ],
    [
      { 5: null, 7: null },
      { 8: null, 17: null },
    ],
    [
      { 9: null, 12: null },
      { 4: null, 11: null },
    ],
    [
      { 21: null, 25: null },
      { 10: null, 18: null },
    ],
    [
      { 19: null, 24: null },
      { 3: null, 15: null },
    ],
    [
      { 20: null, 26: null },
      { 6: null, 16: null },
    ],
    [
      { 2: null, 13: null },
      { 27: null, 0: null },
    ],
  ],
  29: [
    [
      { 24: null, 25: null },
      { 7: null, 1: null },
    ],
    [
      { 20: null, 22: null },
      { 1: null, 5: null },
    ],
    [
      { 9: null, 12: null },
      { 8: null, 18: null },
    ],
    [
      { 23: null, 28: null },
      { 2: null, 4: null },
    ],
    [
      { 21: null, 27: null },
      { 26: null, 4: null },
    ],
    [
      { 5: null, 13: null },
      { 3: null, 6: null },
    ],
    [
      { 10: null, 19: null },
      { 6: null, 7: null },
    ],
  ],
  32: [
    [
      { 24: null, 25: null },
      { 31: null, 0: null },
    ],
    [
      { 9: null, 11: null },
      { 28: null, 5: null },
    ],
    [
      { 10: null, 13: null },
      { 22: null, 26: null },
    ],
    [
      { 7: null, 12: null },
      { 2: null, 15: null },
    ],
    [
      { 21: null, 27: null },
      { 20: null, 29: null },
    ],
    [
      { 23: null, 30: null },
      { 8: null, 19: null },
    ],
    [
      { 4: null, 14: null },
      { 3: null, 17: null },
    ],
    [
      { 6: null, 18: null },
      { 1: null, 16: null },
    ],
  ],
  33: [
    [
      { 29: null, 30: null },
      { 13: null, 22: null },
    ],
    [
      { 26: null, 28: null },
      { 8: null, 20: null },
    ],
    [
      { 9: null, 12: null },
      { 7: null, 14: null },
    ],
    [
      { 23: null, 27: null },
      { 1: null, 17: null },
    ],
    [
      { 5: null, 10: null },
      { 6: null, 19: null },
    ],
    [
      { 25: null, 31: null },
      { 2: null, 16: null },
    ],
    [
      { 24: null, 32: null },
      { 11: null, 21: null },
    ],
    [
      { 4: null, 15: null },
      { 3: null, 18: null },
    ],
  ],
  36: [
    [
      { 26: null, 27: null },
      { 11: null, 22: null },
    ],
    [
      { 29: null, 31: null },
      { 3: null, 19: null },
    ],
    [
      { 9: null, 12: null },
      { 6: null, 20: null },
    ],
    [
      { 10: null, 14: null },
      { 23: null, 30: null },
    ],
    [
      { 28: null, 33: null },
      { 4: null, 16: null },
    ],
    [
      { 7: null, 13: null },
      { 8: null, 21: null },
    ],
    [
      { 24: null, 32: null },
      { 25: null, 34: null },
    ],
    [
      { 5: null, 15: null },
      { 1: null, 18: null },
    ],
    [
      { 2: null, 17: null },
      { 35: null, 0: null },
    ],
  ],
  37: [
    [
      { 13: null, 14: null },
      { 10: null, 12: null },
    ],
    [
      { 26: null, 29: null },
      { 7: null, 15: null },
    ],
    [
      { 30: null, 34: null },
      { 2: null, 18: null },
    ],
    [
      { 27: null, 32: null },
      { 4: null, 17: null },
    ],
    [
      { 25: null, 31: null },
      { 1: null, 19: null },
    ],
    [
      { 28: null, 35: null },
      { 36: null, 9: null },
    ],
    [
      { 24: null, 33: null },
      { 3: null, 20: null },
    ],
    [
      { 5: null, 16: null },
      { 8: null, 22: null },
    ],
    [
      { 11: null, 23: null },
      { 6: null, 21: null },
    ],
  ],
  40: [
    [
      { 33: null, 34: null },
      { 5: null, 17: null },
    ],
    [
      { 29: null, 31: null },
      { 11: null, 24: null },
    ],
    [
      { 12: null, 15: null },
      { 26: null, 36: null },
    ],
    [
      { 9: null, 13: null },
      { 6: null, 22: null },
    ],
    [
      { 27: null, 32: null },
      { 28: null, 35: null },
    ],
    [
      { 10: null, 16: null },
      { 4: null, 18: null },
    ],
    [
      { 30: null, 38: null },
      { 3: null, 21: null },
    ],
    [
      { 37: null, 7: null },
      { 8: null, 23: null },
    ],
    [
      { 14: null, 25: null },
      { 1: null, 20: null },
    ],
    [
      { 2: null, 19: null },
      { 39: null, 0: null },
    ],
  ],
  41: [
    [
      { 32: null, 33: null },
      { 6: null, 23: null },
    ],
    [
      { 13: null, 15: null },
      { 14: null, 26: null },
    ],
    [
      { 9: null, 12: null },
      { 28: null, 36: null },
    ],
    [
      { 35: null, 39: null },
      { 30: null, 37: null },
    ],
    [
      { 29: null, 34: null },
      { 8: null, 24: null },
    ],
    [
      { 10: null, 16: null },
      { 3: null, 22: null },
    ],
    [
      { 31: null, 40: null },
      { 2: null, 20: null },
    ],
    [
      { 7: null, 17: null },
      { 11: null, 25: null },
    ],
    [
      { 27: null, 38: null },
      { 4: null, 19: null },
    ],
    [
      { 5: null, 18: null },
      { 1: null, 21: null },
    ],
  ],
  44: [
    [
      { 9: null, 10: null },
      { 5: null, 19: null },
    ],
    [
      { 33: null, 35: null },
      { 4: null, 20: null },
    ],
    [
      { 12: null, 15: null },
      { 1: null, 22: null },
    ],
    [
      { 13: null, 17: null },
      { 30: null, 38: null },
    ],
    [
      { 32: null, 37: null },
      { 11: null, 26: null },
    ],
    [
      { 36: null, 42: null },
      { 34: null, 41: null },
    ],
    [
      { 31: null, 40: null },
      { 16: null, 28: null },
    ],
    [
      { 29: null, 39: null },
      { 2: null, 21: null },
    ],
    [
      { 7: null, 18: null },
      { 14: null, 27: null },
    ],
    [
      { 8: null, 25: null },
      { 6: null, 24: null },
    ],
    [
      { 3: null, 23: null },
      { 43: null, 0: null },
    ],
  ],
  45: [
    [
      { 12: null, 13: null },
      { 14: null, 28: null },
    ],
    [
      { 34: null, 36: null },
      { 1: null, 23: null },
    ],
    [
      { 15: null, 18: null },
      { 32: null, 37: null },
    ],
    [
      { 38: null, 42: null },
      { 2: null, 22: null },
    ],
    [
      { 33: null, 39: null },
      { 7: null, 19: null },
    ],
    [
      { 10: null, 17: null },
      { 44: null, 9: null },
    ],
    [
      { 35: null, 43: null },
      { 31: null, 40: null },
    ],
    [
      { 30: null, 41: null },
      { 3: null, 24: null },
    ],
    [
      { 16: null, 29: null },
      { 8: null, 26: null },
    ],
    [
      { 5: null, 20: null },
      { 11: null, 27: null },
    ],
    [
      { 4: null, 21: null },
      { 6: null, 25: null },
    ],
  ],
  48: [
    [
      { 35: null, 36: null },
      { 19: null, 31: null },
    ],
    [
      { 37: null, 39: null },
      { 4: null, 22: null },
    ],
    [
      { 12: null, 15: null },
      { 5: null, 21: null },
    ],
    [
      { 13: null, 17: null },
      { 2: null, 23: null },
    ],
    [
      { 40: null, 45: null },
      { 32: null, 43: null },
    ],
    [
      { 38: null, 44: null },
      { 10: null, 18: null },
    ],
    [
      { 34: null, 41: null },
      { 16: null, 30: null },
    ],
    [
      { 33: null, 42: null },
      { 11: null, 28: null },
    ],
    [
      { 46: null, 9: null },
      { 8: null, 27: null },
    ],
    [
      { 7: null, 20: null },
      { 47: null, 0: null },
    ],
    [
      { 14: null, 29: null },
      { 6: null, 26: null },
    ],
    [
      { 3: null, 25: null },
      { 1: null, 24: null },
    ],
  ],
  49: [
    [
      { 12: null, 13: null },
      { 7: null, 21: null },
    ],
    [
      { 15: null, 17: null },
      { 38: null, 47: null },
    ],
    [
      { 36: null, 39: null },
      { 42: null, 46: null },
    ],
    [
      { 35: null, 40: null },
      { 6: null, 27: null },
    ],
    [
      { 37: null, 43: null },
      { 1: null, 25: null },
    ],
    [
      { 41: null, 48: null },
      { 10: null, 18: null },
    ],
    [
      { 34: null, 44: null },
      { 5: null, 22: null },
    ],
    [
      { 9: null, 20: null },
      { 4: null, 23: null },
    ],
    [
      { 33: null, 45: null },
      { 11: null, 29: null },
    ],
    [
      { 19: null, 32: null },
      { 8: null, 28: null },
    ],
    [
      { 16: null, 31: null },
      { 14: null, 30: null },
    ],
    [
      { 2: null, 24: null },
      { 3: null, 26: null },
    ],
  ],
};

// A solution for 13 Bridge Tables (52 players)
// Table 1    41 and 42  vs.  39 and 48
// Table 2    38 and 40  vs.  12 and 15
// Table 3    13 and 17  vs.   2 and 25
// Table 4    45 and 50  vs.  36 and 46
// Table 5    43 and 49  vs.  14 and 31
// Table 6    37 and 44  vs.   4 and 24
// Table 7    10 and 18  vs.   1 and 26
// Table 8     9 and 20  vs.  19 and 33
// Table 9    35 and 47  vs.   6 and 28
// Table 10   21 and 34  vs.  51 and  0
// Table 11    7 and 22  vs.   3 and 27
// Table 12   16 and 32  vs.  11 and 30
// Table 13    5 and 23  vs.   8 and 29

// A solution for 14 Bridge Tables (56 players)
// Table 1    44 and 45  vs.   5 and 25
// Table 2    41 and 43  vs.  15 and 18
// Table 3    13 and 17  vs.   3 and 29
// Table 4    48 and 53  vs.  40 and 47
// Table 5    46 and 52  vs.   1 and 28
// Table 6    12 and 20  vs.  38 and 50
// Table 7    42 and 51  vs.  55 and  0
// Table 8    39 and 49  vs.   6 and 30
// Table 9    54 and 10  vs.   8 and 31
// Table 10    9 and 22  vs.  14 and 33
// Table 11   23 and 37  vs.  16 and 34
// Table 12   21 and 36  vs.  19 and 35
// Table 13    7 and 24  vs.   2 and 27
// Table 14   11 and 32  vs.   4 and 26

// A solution for 15 Bridge Tables (60 players)
// Table 1    17 and 18  vs.  49 and 57
// Table 2    56 and 58  vs.   2 and 29
// Table 3    44 and 47  vs.   3 and 31
// Table 4    46 and 50  vs.   9 and 25
// Table 5    15 and 20  vs.  11 and 34
// Table 6    42 and 48  vs.  41 and 51
// Table 7    45 and 52  vs.  59 and  0
// Table 8    13 and 22  vs.  14 and 35
// Table 9    12 and 23  vs.   8 and 33
// Table 10   43 and 55  vs.   7 and 26
// Table 11   40 and 53  vs.   4 and 28
// Table 12   10 and 24  vs.  16 and 36
// Table 13   39 and 54  vs.  19 and 37
// Table 14   21 and 38  vs.   5 and 27
// Table 15    6 and 32  vs.   1 and 30

// A solution for 16 Bridge Tables (64 players)
// Table 1    60 and 61  vs.  18 and 20
// Table 2    49 and 52  vs.   3 and 33
// Table 3    46 and 50  vs.  43 and 54
// Table 4    48 and 53  vs.  10 and 26
// Table 5    17 and 23  vs.  13 and 25
// Table 6    15 and 22  vs.   9 and 27
// Table 7    51 and 59  vs.   6 and 34
// Table 8    47 and 56  vs.  16 and 38
// Table 9    45 and 55  vs.  21 and 40
// Table 10   62 and 12  vs.  11 and 36
// Table 11   44 and 58  vs.  14 and 37
// Table 12   42 and 57  vs.   7 and 28
// Table 13   24 and 41  vs.   8 and 35
// Table 14   19 and 39  vs.   4 and 30
// Table 15    5 and 29  vs.   2 and 31
// Table 16    1 and 32  vs.  63 and  0

// A solution for 17 Bridge Tables (68 players)
// Table 1    65 and 66  vs.  49 and 60
// Table 2    18 and 20  vs.   2 and 33
// Table 3    50 and 53  vs.   6 and 36
// Table 4    51 and 55  vs.  15 and 22
// Table 5    52 and 57  vs.  54 and 63
// Table 6    17 and 23  vs.  13 and 25
// Table 7    56 and 64  vs.   7 and 30
// Table 8    48 and 58  vs.  12 and 26
// Table 9    46 and 59  vs.   1 and 34
// Table 10   47 and 62  vs.   4 and 32
// Table 11   45 and 61  vs.  19 and 41
// Table 12   27 and 44  vs.  67 and  0
// Table 13   10 and 28  vs.  21 and 42
// Table 14   24 and 43  vs.   5 and 31
// Table 15    9 and 29  vs.   8 and 37
// Table 16   16 and 40  vs.   3 and 35
// Table 17   14 and 39  vs.  11 and 38
