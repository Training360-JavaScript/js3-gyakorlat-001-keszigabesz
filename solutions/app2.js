/* ## 2. feladat
- Fájl: `solutions/app2.js`
- Objektum neve: `HU`
- Export: a HU objektum legyen a default export!
- Készíts egy `HU` nevű objektumot, amelynek az alábbi property-jei vannak:
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően.
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt.
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: "első, második és harmadik" (tehát vesszővel elválasztva, az utolsó elem előtt az "és" szóval). */

const HU = {
    date(date) {
        return new Intl.DateTimeFormat('hu-HU').format(date);
    },
    curreny(amount) {
        return Intl.NumberFormat('hu-HU', {
                style: 'currency',
                currency: 'HUF'
            })
            .format(amount);
    },
    list(array) {
        let string = "";
        let stringEnd = ", ";
        for (let i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                stringEnd = "";
            }
            if (i === array.length - 2) {
                stringEnd = " és ";
            }
            string += array[i] + stringEnd;
        }
        return string;
    },
}





export default HU