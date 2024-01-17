"use strict"

cikl1:
for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++) {

      console.log(size)
      if (size == 1) {
         break cikl1;
      }

   }
}



