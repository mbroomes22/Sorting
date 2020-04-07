describe("Bubble Sort", function() {
  beforeEach(function() {
    spyOn(swap()).and.callThrough();
  });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles a single array", function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it("handles an array with multiple items", function() {
    expect(bubbleSort([1, 6, 5, 3, 7])).toEqual([1, 3, 5, 6, 7]);
    expect(swap.calls.count).toEqual(3);
  });
});
