describe('Split Array function', function() {
  it('is able to handle with empty array', function() {
      expect( split([])).toEqual( [[],[]]);
        });
  it('is able to split an array into two halves', function() {
      expect( split([1,2,5,88,9])).toEqual( [[1,2],[5,88,9]]);
        });
  it('is able to split an even array into two halves', function() {
      expect( split([1,2,5,88])).toEqual( [[1,2],[5,88]]);
    // your code here
  });
});


describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function() {
        expect( merge([27,38],[3,43])).toEqual( [3,27,38,43]);
          });
          it('is able to merge two sorted arrays into one sorted array', function() {
              expect( merge([3,27,38,43],[9,10,82])).toEqual( [3,9,10,27,38,43,82]);
                });
    // test the merging algorithm
  });

  describe('Merge-sort function', function(){
      it('merge is able to sort an array', function() {
          expect(mergeSort([38,27,43,3,9,82,10])).toEqual( [3,9,10,27,38,43,82]);
            });
          });
