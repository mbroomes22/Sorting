// beforeAll(function () {
//     spyOn(swap).and.callThrough(); // replace existing `tootsiepop['lick']` method
//   });

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles a single item in an array', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
      });

    it('handles multiple items in an array', function(){
    //   expect( bubbleSort([1, 3, 2]) ).toEqual( [1, 2, 3] );

      expect( bubbleSort([1, 3, 2, 9, 7]) ).toEqual( [1, 2, 3, 7, 9] );
      
    });

  });


//   it('going through the array calls swap twice', function () {
//     bubbleSort([1, 3, 2, 9, 7]);
//     expect(swap.calls.count()).toEqual(2);
//   });