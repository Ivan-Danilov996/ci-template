import {sortByHealth} from '../app';

// test('sort by health', () => {
//     const result = sortByHealth([
//         {name: 'мечник', health: 10},
//         {name: 'маг', health: 100},
//         {name: 'лучник', health: 80},
//       ]);
  
//     expect(result).toEqual([
//         {name: 'маг', health: 100},
//         {name: 'лучник', health: 80},
//         {name: 'мечник', health: 10},
//       ]);
//   });

  test.each([
    [ 'random',
      [  
        {name: 'мечник', health: 10},  
        {name: 'маг', health: 100},  
        {name: 'лучник', health: 80},
      ],
      [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]
    ],
    [ 'ascending',
      [  
        {name: 'мечник', health: 10}, 
        {name: 'лучник', health: 80}, 
        {name: 'маг', health: 100},  
      ],
      [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]
    ],
    [ 'descending',
      [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ],
      [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]
    ],
    [ 'equality',
      [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 100},
        {name: 'мечник', health: 100},
      ],
      [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 100},
        {name: 'мечник', health: 100},
      ]
    ],

    
  ])(('sort by health'), (random, amount, expected) => {
    const result = sortByHealth(amount);
    expect(result).toEqual(expected);
  });