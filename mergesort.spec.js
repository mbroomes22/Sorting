describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect( split([1, 2]) ).toEqual([[1], [2]]);

      expect( split([2,3,4,5,6,7])).toEqual([[2,3,4],[5,6,7]]);
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array when both arrays are empty', function(){
        expect( merge([],[])).toEqual([]);
    });
    it('is able to merge two sorted arrays into one sorted array when one array is empty', function(){
        expect( merge([1],[])).toEqual([1]);
    });
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect( merge([1,6,9],[2,5,8])).toEqual([1,2,5,6,8,9]);
    });
  });

  describe("merge sort function", function() {
    it("sorts the given array", function() {
      expect(mergeSort([4, 3, 7, 2, 6, 9, 1])).toEqual([1,2,3,4,6,7,9])
    })
  })
