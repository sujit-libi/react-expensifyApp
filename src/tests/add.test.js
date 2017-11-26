const add=(a,b)=>a+b;
const greeting = (name) => `Hello, ${name}`;

test('should add two number',()=>{
    const result = add(4,3);

    /*if(result !== 7){
        throw new Error(`You add 4 and 3. the result was ${result}.Expect 7`);
    }*/

    expect(result).toBe(7);
});

test('should generate greeting from name',()=>{
    const result = greeting('Mike');
    expect(result).toBe('Hello, Mike');
})