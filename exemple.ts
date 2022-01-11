//Alternativa ao Switch em Enum

enum Color{
    RED = "RED",
    BLACK = "BLACK",
    GREEN = "GREEN"
}

type ColorKeys = {
    [key in Color]: string;
}

interface Colors{
    code: string;
    name: string;
    color: Color;
}

class ExampleMain{
    
    getColorWithCode1(colors: Colors): string{
        let resultColor!: string;

        switch (colors.color){
            case Color.RED:
                resultColor = `Red: ${colors.code}`
                break;
            case Color.BLACK:
                resultColor = `Black: ${colors.code}`
                break;
            case Color.GREEN:
                resultColor = `Green: ${colors.code}`
                break;
        }

        return resultColor;
    }

    getColorWithCode2(colors: Colors): string{
        const helper: ColorKeys = {
            RED: `Red: ${colors.code}`,
            BLACK:`Black: ${colors.code}`,
            GREEN:`Green: ${colors.code}`
        }
        return helper[colors.color];
    }

}

