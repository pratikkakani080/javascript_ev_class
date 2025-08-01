// premitive
    // 1. String
        // Alphanumeric
        const testVar = 'test'
        // console.log('' + 'test')
        // console.log("Uncle's" + ' ' + 'test')
        // console.log(`Template ${testVar} literal`)
        // console.log(5 + 4 + '4' + true);
        const newStr = String()
        // console.log(newStr, 66666);
        const stringToCheckMethods = '   This string is generated to test all the methods \uD800    '
        console.log(stringToCheckMethods.length);
        console.log(stringToCheckMethods.charAt(30));
        console.log(stringToCheckMethods.charCodeAt(30));
        console.log(stringToCheckMethods.codePointAt(30));
        console.log(stringToCheckMethods.concat(' ', 'this is merged', ' ', 'string'));
        console.log(stringToCheckMethods + ' ' + 'this is merged' + ' ' + 'string');
        console.log(stringToCheckMethods.at(30));
        console.log(stringToCheckMethods[30]);
        console.log(stringToCheckMethods.slice(15, 24));
        console.log(stringToCheckMethods.slice(-15, -3));
        console.log(stringToCheckMethods.substring(15, 24));
        console.log(stringToCheckMethods.toUpperCase());
        console.log(stringToCheckMethods.toLowerCase());
        console.log(stringToCheckMethods.isWellFormed());
        console.log(stringToCheckMethods.toWellFormed());
        console.log(stringToCheckMethods.trim());
        console.log(stringToCheckMethods.trimStart());
        console.log(stringToCheckMethods.trimEnd());
        console.log(stringToCheckMethods.padStart(60, 0));
        console.log(stringToCheckMethods.padEnd(60, 'T'));
        console.log(stringToCheckMethods.repeat(4));
        console.log(stringToCheckMethods.replace('t', 'A'));
        console.log(stringToCheckMethods.replaceAll('t', 'A'));
        console.log(stringToCheckMethods.split(' '));

    // 2. Number
        // numeric 0 - 9
        // console.log( '9', 9);
        const age = 44
        // console.log(Number(''));
        // integer and float
        // -2^53 to 2^53
        // -9007199254740992 to 9007199254740992
        
    // 3. Boolean
        // conditional data
        // true, false
        const isUserActive = true
        // console.log(Boolean(' '));
        
    // 4. Undefined
        let undefinedVar = undefined
        // console.log(undefinedVar);
        // can not read properties of undefined
        
    // 5. Null
        let nullishValue = null

    // 6. BigInt
        // Bigint() 
        234n

    // 7. Symbol
        // console.log(Symbol());
        // console.log(Symbol() === Symbol());
        
// complex datatype
    // Object
        const photoFrame = { 
            nameOfGod: 'Hanumanji',
            isLighting: true,
            height: '8in',
            width: '4in',
            testObj: {
                testKey: 'testData',
                test2Obj: {}
            },
            testArr: ['testData1', 'testData2']
         }
        //  console.log(photoFrame.testObj.testKey)
    // Array
         const photsList = [
            { 
            nameOfGod: 'Hanumanji',
            isLighting: true,
            height: '8in',
            width: '4in',
            testObj: {
                testKey: 'testData',
                test2Obj: {}
            },
            testArr: ['testData1', 'testData2']
         },
         { 
            nameOfGod: 'Hanumanji',
            isLighting: true,
            height: '8in',
            width: '4in',
            testObj: {
                testKey: 'testData',
                test2Obj: {}
            },
            testArr: ['testData1', 'testData2']
         },
         { 
            nameOfGod: 'Ram',
            isLighting: true,
            height: '10in',
            width: '24in',
            testObj: {
                testKey: 'testData',
                test2Obj: {}
            },
            
         },
         { 
            nameOfGod: 'Shiva',
            isLighting: true,
            height: '12in',
            width: '8in',
           
            testArr: ['testData1', 'testData2']
         }
         ]
        //  console.log(photsList);
         
    // Functions
         function myFirstFun() {
            // console.log('this is function running');
         }

         myFirstFun()

         // Arrow function
         const myFirstArrowFun = () => {
            // console.log('this is arrow function running');
         }

         myFirstArrowFun()