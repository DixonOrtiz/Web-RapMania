const hbs = require("hbs");

hbs.registerHelper("getAnio", () => {
    let anio = new Date;
    return anio.getFullYear();
});