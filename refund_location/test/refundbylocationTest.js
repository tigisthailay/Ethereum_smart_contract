const { expect } = require('chai');

var chai = require('chai');

describe('Employer Unit Test', function () {
    before(async function () {
      Employer = await ethers.getContractFactory('Employer');
      Employer = await Employer.deploy();
      await Employer.deployed();
    });

    it('storing a value', async function () {
      await Employer.setEmployee('0x423CDF9E217ccADAe24C0fde562Ac8A897A177B8', 'emp','34.09', '98.43', '20', '3','4');
    });

    it('get a value', async function () {
      expect((await Employer.getAllEmployees()).toString()).to.equal('0x423CDF9E217ccADAe24C0fde562Ac8A897A177B8');
    });

    it('retrieve returns a value previously stored', async function () {
     expect((await Employer.getEmployee('0x423CDF9E217ccADAe24C0fde562Ac8A897A177B8')).toString()).to.equal('emp,34.09,98.43,3,4,20');
    }); 

    it('retrieve returns a count of previously stored', async function () {
      
       expect((await Employer.countEmployees()).toNumber()).to.equal(1);
    }); 
    

    it('calling the contract balance', async function () {
      expect((await Employer.getBalance()).toNumber()).to.equal(0); 
    });
  });