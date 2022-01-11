"# alternativa-switch-case-typescript"
# Alternativa ao Switch case em typescript 
=====

Enum Color
-------------
Color
```typescript
enum Color{
    RED = "RED",
    BLACK = "BLACK",
    GREEN = "GREEN"
}

```

With switch case
-------------
Method with switch
```typescript

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

```


Now with use type
-------------
add new Type ColorKeys

```typescript
type ColorKeys = {
    [key in Color]: string;
}
```


Now use
-------------

```typescript

    getColorWithCode2(colors: Colors): string{
        const helper: ColorKeys = {
            RED: `Red: ${colors.code}`,
            BLACK:`Black: ${colors.code}`,
            GREEN:`Green: ${colors.code}`
        }
        return helper[colors.color];
    }
```







Can you help me?
--------------
Download my games and rate them! it helps me a lot.
* https://play.google.com/store/apps/details?id=br.com.zubcov.zombiemission&hl=pt_BR&gl=US
* https://gamedevbr.itch.io/zombie-missision

References
-------------
* https://angular.io/api/core/Type
* https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals