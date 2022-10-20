describe("Payments Test (with setup and tear-down)", function () {
  beforeAll( function(){
    billAmtInput.value = "500";
    tipAmtInput.value = "50";
  });
  
  beforeEach(function () {
    // initialization logic
 
  });

  it('should return an object with 3 properties', function () {
    
    expect(Object.keys(createCurPayment()).length).toEqual(3);

  });


  it('should post a table row to the payment table', function () {
      appendPaymentTable({billAmt: '500', tipAmt: '50', tipPercent: 10});
      expect(document.querySelector("#paymentTable tbody tr")).not.toEqual(null);
  
  });


  it('should post a table row to the summary', function () {
      updateSummary();
      expect(document.querySelector("#summaryTable tbody tr")).not.toEqual(null);
  
  });

  
  it("should make a new table row", function(){
      let newTr = document.createElement('tr');
      newTr.id = 'test_row';
      appendTd(newTr, 'test1');
      appendTd(newTr, 'test2');
      appendTd(newTr, 'test3');
      appendDeleteBtn(newTr);
      document.querySelector("#summaryTable tbody").append(newTr);
      expect(document.querySelector("#summaryTable tbody tr")).not.toEqual(null);
  })


  afterEach(function () {
        
  });

  afterAll( function(){
    billAmtInput.value = "";
    tipAmtInput.value = "";
    document.querySelector("#paymentTable tbody tr").remove();
    document.querySelector("#summaryTable tbody tr").remove();
  });
});
