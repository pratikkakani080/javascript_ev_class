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
        const stringToCheckMethods = '   This string is generated to test all the methods \uD800    THIS STRING IS GENERATED TO TEST ALL THE METHODS'
        // console.log(stringToCheckMethods.length);
        // console.log(stringToCheckMethods.charAt(30));
        // console.log(stringToCheckMethods.charCodeAt(30));
        // console.log(stringToCheckMethods.codePointAt(30));
        // console.log(stringToCheckMethods.concat(' ', 'this is merged', ' ', 'string'));
        // console.log(stringToCheckMethods + ' ' + 'this is merged' + ' ' + 'string');
        // console.log(stringToCheckMethods.at(30));
        // console.log(stringToCheckMethods[30]);
        // console.log(stringToCheckMethods.slice(15, 24));
        // console.log(stringToCheckMethods.slice(-15, -3));
        // console.log(stringToCheckMethods.substring(15, 24));
        // console.log(stringToCheckMethods.toUpperCase());
        // console.log(stringToCheckMethods.toLowerCase());
        // console.log(stringToCheckMethods.isWellFormed());
        // console.log(stringToCheckMethods.toWellFormed());
        // console.log(stringToCheckMethods.trim());
        // console.log(stringToCheckMethods.trimStart());
        // console.log(stringToCheckMethods.trimEnd());
        // console.log(stringToCheckMethods.padStart(60, 0));
        // console.log(stringToCheckMethods.padEnd(60, 'T'));
        // console.log(stringToCheckMethods.repeat(4));
        // console.log(stringToCheckMethods.replace('t', 'A'));
        // console.log(stringToCheckMethods.replaceAll('t', 'A'));
        // console.log(stringToCheckMethods.split(' '));
        // console.log(stringToCheckMethods.indexOf('t'));
        // console.log(stringToCheckMethods.lastIndexOf('t'));
        // console.log(stringToCheckMethods.search('t'));
        // console.log(stringToCheckMethods.match('generated'));
        // console.log(Array.from(stringToCheckMethods.matchAll(/generated/gi)));
        // console.log(stringToCheckMethods.includes('generated'));
        // console.log(stringToCheckMethods.startsWith(' '));
        // console.log(stringToCheckMethods.endsWith('d'));

    // 2. Number
        // numeric 0 - 9
        // console.log( '9', 9);
        const age = 44
        // console.log(Number(''));
        // integer and float
        // -2^53 to 2^53
        // -9007199254740992 to 9007199254740992
        const numberss = 234343
        const floatingNum = 5.3333333
        // console.log(numberss.toString());
        // console.log(String(numberss));
        // console.log(numberss.toExponential(3));
        // console.log(floatingNum.toFixed(2));
        
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
        // console.log(Object.assign({}, {nameOfGod: 'Shiva'}, {num: 666}))
        delete photoFrame.testObj
        // console.log(photoFrame);
        // console.log(JSON.stringify(photoFrame))
        document.writeln(JSON.stringify(photoFrame))
        // console.log(JSON.parse(JSON.stringify(photoFrame)))
        // console.log(Object.keys(photoFrame))
        // console.log(Object.values(photoFrame))
        // console.log(Object.entries(photoFrame))
        
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
            width1: '8in',
            width3: '8in',
            width4: '8in',
            width5: '8in',
            width6: '8in',
            width7: '8in',
            width8: '8in',
            width9: '8in',
            width23: '8in',
            width54: '8in',
            width65: '8in',
            width234: '8in',
            width2234: '8in',
            width333: '8in',
            width22: '8in',
            width11: '8in',
            width55: '8in',
            width66: '8in',
            width2222: '8in',
            widt33h: '8in',
            widt4h: '8in',
            wid55th: '8in',
            wid6th: '8in',
            wi6dth: '9in',
           
            testArr: ['testData1', 'testData2']
         }
         ]
         const arrOfNum = [3,4,5,6,7,8]
        //  console.log(photsList.length);
        //  console.log(arrOfNum.toString());
        //  document.writeln(arrOfNum)
        //  console.log(photsList.at(3));
        //  console.log(photsList[0]);
        //  console.log(arrOfNum.join(' | '));
        //  console.log(photsList.pop()) // removes last element of the array
        //  console.log(photsList.push({nameOfGod: 'Ganapati'})) // adds one element at the last index of the array
        //  console.log(photsList.shift());
        //  console.log(photsList.unshift({nameOfGod: 'Bhavani'}));
        //  delete photsList[1] // do not use this
         
        //  console.log(photsList.concat([{nameOfGod: 'Sarasvati'}, {nameOfGod: 'Ambe ma'}, {nameOfGod: 'Krishna'}]));
        //  console.log(photsList.copyWithin(2, 0, 1))
        //  console.log(photsList.slice(1, 3));
        //  console.log(photsList.toSpliced(1, 2));
        //  console.log(photsList.splice(1, 2));
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