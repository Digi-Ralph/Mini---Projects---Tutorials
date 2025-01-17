// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const x = inventors.filter((e) => {
        if (e.year > 1500 && e.year < 1600) {
          return 1
        }
      })
  
      console.table(x)
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
      console.table(fullName)
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
     const sortName = inventors.sort(
       (a , b)  => {
           if (a.year < b.year)
           return 1
      })
     
      console.table(sortName)
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      const result = inventors.reduce((accumulator, currentValue)  =>

        accumulator + (currentValue.passed - currentValue.year),0 )
      // why adding the value of 0 before the end fix the calculation ? 
      // first time we don't have a value in accumulator so it's value is set to undefined
      // undefined + 1 = NaN 
      // that why we add a ,0) at the end to make the value start at 0
      console.table(result)
      // 5. Sort the inventors by years lived
      const livedYears = inventors.sort((a,b) =>  {
        const x =  a.passed - a.year;
        const y =  b.passed - b.year;
         if (x < y) return 1})
       console.table(livedYears)  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      const category = document.querySelector('.mw-category')
      const list = category.querySelectorAll('a')
      console.log(list)  
         
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const sortNames = people.sort(function(first , second) {
        const x = first.split(' ')
        const y = second.split(' ')
        if (x[1] > y[1]) return 1 })
      console.table(sortNames)
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 
      'bike', 'walk', 'car', 'van', 'car', 'truck' ];
        
      const instance =  data.reduce( (countWords, word) => {
         countWords[word] = ++countWords[word] || 1 ;
            return countWords;
        }, {});
      const conv = Object.entries(instance)
    console.table(conv)