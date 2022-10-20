describe("Helpers Test (with setup and tear-down)", function () {
    beforeAll( function(){
      billAmtInput.value = "500";
      tipAmtInput.value = "50";
    });
  
    it('should calculate the proper tip', function () {
      
      expect(calculateTipPercent(500, 50)).toEqual(10);
  
    });

    it("should delete a row", function(){
      let e = {};
      e.target = document.querySelector("#test_row .delbtn");
      deleteRow(e);

      expect(document.getElementById("test_row")).toEqual(null);

    });
  
    afterAll( function(){
      billAmtInput.value = "";
      tipAmtInput.value = "";
    });
  });
  