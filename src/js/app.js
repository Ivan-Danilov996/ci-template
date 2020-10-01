// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));



const getHealth = (data) => {
    if (data.health > 50) {
        return 'healthy';
         
    } else if (data.health >= 15) {
        return 'wounded';
         
    } else {
        return 'critical';
    }
}

export default getHealth;


const array = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  export function sortByHealth(arr) {
    return arr.sort((a, b) => a.health < b.health ? 1 : -1);
  }
  console.log(sortByHealth(array));
