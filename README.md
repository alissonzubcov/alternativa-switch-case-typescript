# Alternative to Switch case in typescript  

----------
Hello Developer, how are you?
I will present an alternative to using switch case.

Do you know what a switch case is?
When a lot of else ifs appear, we soon think about using a switch case to solve our problem of many ifs.

The switch case approach may seem like the solution to many ifs, but is it really the solution?

The switch case has several problems, from its procedural control flow to its non-standardization in dealing with blocks.
of code. Javascript uses keys, but switch does not. In your design we are forced to manually add the
breaks via the word break.


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
* https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html