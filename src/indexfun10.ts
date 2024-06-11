function add(x: string, y: string): string;

function add(x: number, y: number): number;

function add(x: any, y: any): any {
    return x + y;

}
console.log(add("Hola", "Sofia"));
console.log(add(20, 30));