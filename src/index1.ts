function ShowName(name: string){
    switch (name){
        case "Sofia":
            console.log("Su nombre es Sofia y su numero es #####");
            break;
        case "Natalia":
            console.log("Su nombre es Natalia y su numero es #####");
            break;
        case "Camilo":
            console.log("Su nombre es Camilo y su numero es #####");
            break;
        case "Sebastian":
             console.log("Su nombre es Sebastian y su numero es #####");
            break;
        default:
             throw new Error("Nombre no valido");
    }
}

ShowName("Natalia");