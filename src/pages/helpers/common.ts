export enum Colors {
    bug = 'B1C12E',
    dark = '4F3A2D',
    dragon = '755EDF',
    electric = 'FCBC17',
    fairy = 'F4B1F4',
    fighting = '823551D',
    fire = 'E73B0C',
    flying = 'A3B3F7',
    ghost = '6060B2',
    grass = '74C236',
    ground = 'D3B357',
    ice = 'A3E7FD',
    normal = 'C8C4BC',
    poison = '934594',
    psychic = 'ED4882',
    rock = 'B9A156',
    steel = 'B5B5C3',
    water = '3295F6'
}

export function findArrayElementByTitle(array: any, item: any) {
    return array.find((element: any) => {
        return element.title === item;
    });
}
export function getBackgroundColorFromType(type: string) {
    const colorCode = Colors[type as keyof typeof Colors];
    return colorCode;
}

export function getPokemonImage(index: any) {
    //console.log(index);
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`;
    return image;
}

//vaardigheden
export function formattedSkills(abilities: any[]) {
    let skills = abilities
        .map((ability: any) => {
            return ability.ability.name
                .toLowerCase()
                .split('-')
                .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
        })
        .join(', ');
    return skills;
}

//Check if pokemon is in favorites or Myteam list
export function isPokemonInDelist(arr: any[], item: any) {
    let inList = arr.some((e) => e.id === item) ? true : false;
    return inList;
}
//Check generate random number 1-151
export function getRandomNumber(){
    let ranInt = Math.floor(Math.random() * (151 - 2)) + 1;
    return ranInt;
}

export function getFormattedMoveSets(move: any[]) {
    let colors = ['#4B0082', '#00FF00', '#00FF01', '#FFFF00'];
    let moveSets: any = [];
    //To pick 4 random moves
    for (let i = 1; i <= 4; i++) {
        //Math.floor(Math.random() * (max - min +1)) + 1;
        let ranInt = Math.floor(Math.random() * (9 - 2)) + 1;
        moveSets.push({ color: colors[i], level: ranInt, name: move[ranInt].move.name });
    }

    return moveSets;
}
