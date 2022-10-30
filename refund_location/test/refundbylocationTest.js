var Refundbylocation = artifacts.require("Refundbylocation.sol");

contract("Refundbylocation", function(accounts) {
  var refundInstance;

  it("initializes with two people", function() {
    return Refundbylocation.deployed().then(function(instance) {
      refundInstance = instance;
      return refundInstance.initialize_employers([accounts[4],accounts[5],accounts[6]])
    }).then(function(initialized, count) {
        console.log("IIIIIIIOOOOOOOOOOOO")
      return refundInstance.employers(accounts[4]);
   }).then(function(employers) {
      console.log("serdfcgvhbjncgvbncgvbngvhb")
      console.log(employers)
      console.log(accounts[4])
      return refundInstance.Create_contract_data([878474,3067564],[4882834,325644664], 30 , 'First Contract employee' , accounts[3] , accounts[4])
    }).then(function(firstcontract) {
      console.log("serdfcgvhbjncgvbncgvbngvhb")
      console.log(firstcontract)
      return refundInstance.Create_contract_data([878474,3067564],[4882834,325644664], 30 , 'Second Contract employee' , accounts[3] , accounts[4])
    }).then(function(contract) {
      console.log("contarscdggdhfjfjferferfef")
      console.log(accounts[4])
      return refundInstance.Contractcount()
  }).then(function(data) {
    console.log("rtririeiieiee")
    console.log(data)
    return refundInstance.contracts(accounts[3])
  }).then(function(contracts) {
    console.log(contracts)

  })
})

})