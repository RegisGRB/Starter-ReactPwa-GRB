
 const helpers = {
    getrandomInt: (max) => {
        return Math.floor(Math.random() * Math.floor(max));
      },
    randomizeArray: (array) => {
        var i, j, tmp;
        for (i = array.length - 1; i > 0; i--) {
          j = helpers.getrandomInt(i+1);
          tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
        return array;
      },
     generateKey : (prefixer) => {
      //  console.log( `${ prefixer }_${ new Date().getTime() }`);
        return `${ prefixer }_${ new Date().getTime() }`;
    }
  };
  export default helpers;