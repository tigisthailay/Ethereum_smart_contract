pragma solidity >=0.4.22 <0.9.0;
// pragma experimental ABIEncoderV2;

contract RefundByLocation{
    
    struct Employer{
        // uint id;
        string name;
        address employer_address;
    }

    struct Employee{
        // uint id;
        string name;
        address employee_address;
    }

    struct Employee_Location_info{
        address employee_address;
        uint contract_id;
        uint coord_long;
        uint lng_offset;
        uint coord_lat;
        uint lat_offset;
        uint distance_from_contract_coord;
        string timestamp;
        bool status;
    }

    struct single_contract_info{
        uint id;
        address employee_address;
        address employer_address;
        uint coord_long;
        uint lng_offset;
        uint coord_lat;
        uint lat_offset;
        uint radius;
    }
    
    Employee[] public employees;
    Employer[] public employers;
    uint public employercount;
    uint public employeecount;

    single_contract_info[] public contract_infos;
    uint public contract_info_count;

    Employee_Location_info[] public employee_location_infos;
    uint public employee_location_infos_count;

    

    function init_employer(string memory _name, address a) public{
        employers.push(Employer(_name,a));
        employercount ++;
    }

    function init_employee(string memory _name, address a) public{
        employees.push(Employee(_name, a));
        employeecount++;
    }

    function create_employee_location_info(uint contract_id, address _employee_address, 
            uint[2] memory _lat, uint[2] memory _lng,
            string memory _timestamp, bool _status, uint _distance
        ) public returns(bool){
        // single_contract_info memory contract_info = contract_infos[contract_id[0]];
        // if(contract_info.id > 0){
        Employee memory emplee;
        bool is_employee = false;
        for(uint j=0;j<employeecount;j++){
            if(employees[j].employee_address == _employee_address){
                emplee = employees[j];
                is_employee = true;
                break;
            }
        }
        if(!is_employee){
            return false;
        }
        else{
            employee_location_infos.push(
                Employee_Location_info(
                    _employee_address,
                    contract_id,
                    _lng[0],
                    _lng[1],
                    _lat[0],
                    _lat[1],
                    _distance,
                    _timestamp,
                    _status
                )
            );
            employee_location_infos_count++;
        }
        // }
        // else{
        //     return false;
        // }
        return true;
    }

    function create_contract(address _employer_address, address _employee_address, uint[2] memory lat, uint[2] memory lng, uint radius) public returns(bool){
        Employer memory emplr;
        bool is_employer = false;
        for(uint i=0;i<employercount;i++){
            if (employers[i].employer_address == _employer_address){
                emplr = employers[i];
                is_employer = true;
                break;
            }
        }
        if(!is_employer){
            return false;
        }
        Employee memory emplee;
        bool is_employee = false;
        for(uint j=0;j<employeecount;j++){
            if(employees[j].employee_address == _employee_address){
                emplee = employees[j];
                is_employee = true;
                break;
            }
        }
        if(!is_employee){
            emplee = Employee("your name", _employee_address);
            employees.push(emplee);
            employeecount++;

        }
        contract_infos.push(
            single_contract_info(
                contract_info_count,
                _employee_address,
                _employer_address,
                lng[0],
                lng[1],
                lat[0],
                lat[1],
                radius
            )
        );
        contract_info_count++;
        
        return true;
    }
}