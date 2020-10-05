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
    {name: 'мечник', health: 100},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 100},
  ];
  export function sortByHealth(arr) {
    return arr.sort((a, b) => {
        if (a.health === b.health || a.health < b.health) {
            return 1
        } else  {
            return -1
        }
    });
  }
  console.log(sortByHealth(array));
