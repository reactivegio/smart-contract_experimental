// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BuyAndSelling is ERC20, Ownable{
  using SafeMath for uint256;

  struct Product {
    bytes32 dna;
    address seller;
    string name;    
    uint totalTokens;
  }

  struct Buyer {
    address ownerName;
    bytes32 name;
    uint64 tokenBuyed;
  }

  Product[] public productList;

  uint totalProductEntries_ = 0;
  address public ownerAddress_;
  mapping(address => bool) public sellers;
  mapping(address => uint256) public balances;
  mapping(address => mapping(address => uint256)) public allowed;
  uint256 private constant MAX_UINT256 = 2**256 - 1;   

  /**
  ╭――――――――――――――――――╮
  │      EVENTS      │
  ╰――――――――――――――――――╯
  */
  event NewProduct(bytes32 dnaProduct, address seller, string name, uint256 totalTokens);

constructor() ERC20("BuyAndSelling", "BES") {
  ownerAddress_ = msg.sender;     
   // test purpose only set sellers list for product owner role
  // ERC20 tokens have 18 decimals 
  // number of tokens minted = n * 10^18    
  sellers[ownerAddress_] = true;
  _mint(ownerAddress_, 1000 * 10^18);      
}
    
  function getOwner(
    ) public view returns (address) {            
        return ownerAddress_;
    }

  function mint(address _to, uint256 _initialAmount) public {
      _mint(_to, _initialAmount);
      balances[_to] = _initialAmount; 
  }

  function isSeller(address _to) public view returns(bool) {
    // require(sellers[_to], "This is not a seller");
    if(sellers[_to]){
      return true;
    }
    else{
      return false;
    }  
  }

    function transferTokenFrom(
        bytes32 dnaProduct,
        address _from,
        address _to,
        uint256 _value
    ) external payable{
        allowed[_from][_to] = _value;        
        _transfer(_from, _to, _value);
        uint updatedToken;
        string memory nameProduct;
        for(uint256 i = 0; i < totalProductEntries_; i++){
          if(productList[i].dna == dnaProduct){
            productList[i].totalTokens -= _value;
            updatedToken = productList[i].totalTokens;
            nameProduct = productList[i].name;
          }
        }
        // require(balances[_from] >= _value && allowance_ >= _value);
        balances[_to] += _value;
        balances[_from] -= _value;               
        emit Transfer(_from, _to, _value);         
    }

  function createProduct(address _seller, string memory _name, uint _tokens) public {
    balances[_seller] = _tokens;
    mint(_seller, _tokens);
    bytes32 hashId = keccak256(abi.encodePacked(_name));
    productList.push(Product(hashId, _seller, _name, _tokens));
    emit NewProduct(hashId, _seller, _name, _tokens);    
    totalProductEntries_++;
  }
  
  function getProductList() public view returns (Product[] memory) {    
    return productList;
  }
}
