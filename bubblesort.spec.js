// beforeAll(function () {
//   spyOn(window,"swap").and.callThrough();
//
//
// });




describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('Count how many times we call swap', function () {
     spyOn(window,"swap").and.callThrough();
    expect(window.swap.calls.count()).toEqual(0);
  });

});

describe('Bubble Sort', function(){
  it('handles an array of 2 elements', function(){
    expect( bubbleSort([3,2]) ).toEqual( [2,3] );
  });
  it('Count how many times we call swap', function () {
     spyOn(window,"swap").and.callThrough();
     bubbleSort([3,2])
    expect(window.swap.calls.count()).toEqual(1);
  });

});


describe('Bubble Sort', function(){
  it('handles an array of 2 elements', function(){
    expect( bubbleSort([2,3]) ).toEqual( [2,3] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array of 5 elements', function(){
    expect( bubbleSort([5,3,6,7,4]) ).toEqual( [3,4,5,6,7] );
  });
});
