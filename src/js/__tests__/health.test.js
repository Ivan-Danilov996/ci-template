import getHealth from '../app';

test.each([
  ['critical', { name: 'Маг', health: 1 }, 'critical'],
  ['critical', { name: 'Маг', health: 14 }, 'critical'],
  ['wounded', { name: 'Маг', health: 15 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 35 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 50 }, 'wounded'],
  ['healthy', { name: 'Маг', health: 51 }, 'healthy'],
  ['healthy', { name: 'Маг', health: 100 }, 'healthy'],
])(('setting the health scale depending on its amount'), (health, amount, expected) => {
  const result = getHealth(amount);
  expect(result).toBe(expected);
});
