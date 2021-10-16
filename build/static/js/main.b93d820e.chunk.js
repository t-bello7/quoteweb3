(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{20:function(f,e,b){},21:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"QuotePortal","sourceName":"contracts/QuotePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewQuote","type":"event"},{"inputs":[],"name":"getAllQuotes","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct QuotePortal.Quote[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalQuotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastQuoteWritten","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"writeQuote","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526200004f6040518060400160405280601281526020017f486f6c6c6120446576416e6f6e796d6f757300000000000000000000000000008152506200005560201b6200068a1760201c565b620001e9565b620000f5816040516024016200006c919062000162565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200012e8262000186565b6200013a818562000191565b93506200014c818560208601620001a2565b6200015781620001d8565b840191505092915050565b600060208201905081810360008301526200017e818462000121565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001c2578082015181840152602081019050620001a5565b83811115620001d2576000848401525b50505050565b6000601f19601f8301169050919050565b61114280620001f96000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634c4332ba1461005157806370da78f91461006f578063c1b5ae771461008b578063f9d672a7146100a9575b600080fd5b6100596100d9565b6040516100669190610cd0565b60405180910390f35b610089600480360381019061008491906109cd565b61022a565b005b610093610627565b6040516100a09190610dd4565b60405180910390f35b6100c360048036038101906100be91906109a4565b610672565b6040516100d09190610dd4565b60405180910390f35b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561022157838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461018690610fc5565b80601f01602080910402602001604051908101604052809291908181526020018280546101b290610fc5565b80156101ff5780601f106101d4576101008083540402835291602001916101ff565b820191906000526020600020905b8154815290600101906020018083116101e257829003601f168201915b50505050508152602001600282015481525050815260200190600101906100fd565b50505050905090565b42600f600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546102779190610ef1565b106102b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ae90610db4565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600160008082825461030d9190610ef1565b925050819055506103536040518060400160405280601881526020017f25732077726974657320612071756f746520746f20796f75000000000000000081525033610723565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610412929190610884565b506040820151816002015550506000606460015442446104329190610ef1565b61043c9190610ef1565b6104469190610ff7565b90506104876040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a20257300000000000000000000815250826107bf565b8060018190555060328110156105d3576104d66040518060400160405280600781526020017f257320776f6e210000000000000000000000000000000000000000000000000081525033610723565b6000655af3107a4000905047811115610524576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051b90610d74565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161054a90610cbb565b60006040518083038185875af1925050503d8060008114610587576040519150601f19603f3d011682016040523d82523d6000602084013e61058c565b606091505b50509050806105d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c790610d94565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f2dd4ff1f878d3775bba6cf86eda569a8daeeac1afd74d9011ac9a654d23916f6428460405161061b929190610def565b60405180910390a25050565b600061066a6040518060400160405280601881526020017f5765206861766520256420746f74616c2071756f7465732100000000000000008152506000546107bf565b600054905090565b60036020528060005260406000206000915090505481565b6107208160405160240161069e9190610cf2565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085b565b50565b6107bb8282604051602401610739929190610d14565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085b565b5050565b61085782826040516024016107d5929190610d44565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085b565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461089090610fc5565b90600052602060002090601f0160209004810192826108b257600085556108f9565b82601f106108cb57805160ff19168380011785556108f9565b828001600101855582156108f9579182015b828111156108f85782518255916020019190600101906108dd565b5b509050610906919061090a565b5090565b5b8082111561092357600081600090555060010161090b565b5090565b600061093a61093584610e50565b610e1f565b90508281526020810184848401111561095257600080fd5b61095d848285610f83565b509392505050565b600081359050610974816110f5565b92915050565b600082601f83011261098b57600080fd5b813561099b848260208601610927565b91505092915050565b6000602082840312156109b657600080fd5b60006109c484828501610965565b91505092915050565b6000602082840312156109df57600080fd5b600082013567ffffffffffffffff8111156109f957600080fd5b610a058482850161097a565b91505092915050565b6000610a1a8383610c4d565b905092915050565b610a2b81610f47565b82525050565b610a3a81610f47565b82525050565b6000610a4b82610e90565b610a558185610eb3565b935083602082028501610a6785610e80565b8060005b85811015610aa35784840389528151610a848582610a0e565b9450610a8f83610ea6565b925060208a01995050600181019050610a6b565b50829750879550505050505092915050565b6000610ac082610e9b565b610aca8185610ecf565b9350610ada818560208601610f92565b610ae3816110e4565b840191505092915050565b6000610af982610e9b565b610b038185610ee0565b9350610b13818560208601610f92565b610b1c816110e4565b840191505092915050565b6000610b34603483610ee0565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b9a602783610ee0565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c00600083610ec4565b9150600082019050919050565b6000610c1a600f83610ee0565b91507f57616974203135207365636f6e647300000000000000000000000000000000006000830152602082019050919050565b6000606083016000830151610c656000860182610a22565b5060208301518482036020860152610c7d8282610ab5565b9150506040830151610c926040860182610c9d565b508091505092915050565b610ca681610f79565b82525050565b610cb581610f79565b82525050565b6000610cc682610bf3565b9150819050919050565b60006020820190508181036000830152610cea8184610a40565b905092915050565b60006020820190508181036000830152610d0c8184610aee565b905092915050565b60006040820190508181036000830152610d2e8185610aee565b9050610d3d6020830184610a31565b9392505050565b60006040820190508181036000830152610d5e8185610aee565b9050610d6d6020830184610cac565b9392505050565b60006020820190508181036000830152610d8d81610b27565b9050919050565b60006020820190508181036000830152610dad81610b8d565b9050919050565b60006020820190508181036000830152610dcd81610c0d565b9050919050565b6000602082019050610de96000830184610cac565b92915050565b6000604082019050610e046000830185610cac565b8181036020830152610e168184610aee565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e4657610e456110b5565b5b8060405250919050565b600067ffffffffffffffff821115610e6b57610e6a6110b5565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610efc82610f79565b9150610f0783610f79565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f3c57610f3b611028565b5b828201905092915050565b6000610f5282610f59565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610fb0578082015181840152602081019050610f95565b83811115610fbf576000848401525b50505050565b60006002820490506001821680610fdd57607f821691505b60208210811415610ff157610ff0611086565b5b50919050565b600061100282610f79565b915061100d83610f79565b92508261101d5761101c611057565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110fe81610f47565b811461110957600080fd5b5056fea26469706673582212203a5fa7ac2d1bf32ac2b0447eb8f40a88c87ef301b03cd74dd1fc8c1a5ed7b43b64736f6c63430008000033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80634c4332ba1461005157806370da78f91461006f578063c1b5ae771461008b578063f9d672a7146100a9575b600080fd5b6100596100d9565b6040516100669190610cd0565b60405180910390f35b610089600480360381019061008491906109cd565b61022a565b005b610093610627565b6040516100a09190610dd4565b60405180910390f35b6100c360048036038101906100be91906109a4565b610672565b6040516100d09190610dd4565b60405180910390f35b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561022157838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461018690610fc5565b80601f01602080910402602001604051908101604052809291908181526020018280546101b290610fc5565b80156101ff5780601f106101d4576101008083540402835291602001916101ff565b820191906000526020600020905b8154815290600101906020018083116101e257829003601f168201915b50505050508152602001600282015481525050815260200190600101906100fd565b50505050905090565b42600f600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546102779190610ef1565b106102b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ae90610db4565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600160008082825461030d9190610ef1565b925050819055506103536040518060400160405280601881526020017f25732077726974657320612071756f746520746f20796f75000000000000000081525033610723565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610412929190610884565b506040820151816002015550506000606460015442446104329190610ef1565b61043c9190610ef1565b6104469190610ff7565b90506104876040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a20257300000000000000000000815250826107bf565b8060018190555060328110156105d3576104d66040518060400160405280600781526020017f257320776f6e210000000000000000000000000000000000000000000000000081525033610723565b6000655af3107a4000905047811115610524576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051b90610d74565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161054a90610cbb565b60006040518083038185875af1925050503d8060008114610587576040519150601f19603f3d011682016040523d82523d6000602084013e61058c565b606091505b50509050806105d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c790610d94565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f2dd4ff1f878d3775bba6cf86eda569a8daeeac1afd74d9011ac9a654d23916f6428460405161061b929190610def565b60405180910390a25050565b600061066a6040518060400160405280601881526020017f5765206861766520256420746f74616c2071756f7465732100000000000000008152506000546107bf565b600054905090565b60036020528060005260406000206000915090505481565b6107208160405160240161069e9190610cf2565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085b565b50565b6107bb8282604051602401610739929190610d14565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085b565b5050565b61085782826040516024016107d5929190610d44565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085b565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461089090610fc5565b90600052602060002090601f0160209004810192826108b257600085556108f9565b82601f106108cb57805160ff19168380011785556108f9565b828001600101855582156108f9579182015b828111156108f85782518255916020019190600101906108dd565b5b509050610906919061090a565b5090565b5b8082111561092357600081600090555060010161090b565b5090565b600061093a61093584610e50565b610e1f565b90508281526020810184848401111561095257600080fd5b61095d848285610f83565b509392505050565b600081359050610974816110f5565b92915050565b600082601f83011261098b57600080fd5b813561099b848260208601610927565b91505092915050565b6000602082840312156109b657600080fd5b60006109c484828501610965565b91505092915050565b6000602082840312156109df57600080fd5b600082013567ffffffffffffffff8111156109f957600080fd5b610a058482850161097a565b91505092915050565b6000610a1a8383610c4d565b905092915050565b610a2b81610f47565b82525050565b610a3a81610f47565b82525050565b6000610a4b82610e90565b610a558185610eb3565b935083602082028501610a6785610e80565b8060005b85811015610aa35784840389528151610a848582610a0e565b9450610a8f83610ea6565b925060208a01995050600181019050610a6b565b50829750879550505050505092915050565b6000610ac082610e9b565b610aca8185610ecf565b9350610ada818560208601610f92565b610ae3816110e4565b840191505092915050565b6000610af982610e9b565b610b038185610ee0565b9350610b13818560208601610f92565b610b1c816110e4565b840191505092915050565b6000610b34603483610ee0565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b9a602783610ee0565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c00600083610ec4565b9150600082019050919050565b6000610c1a600f83610ee0565b91507f57616974203135207365636f6e647300000000000000000000000000000000006000830152602082019050919050565b6000606083016000830151610c656000860182610a22565b5060208301518482036020860152610c7d8282610ab5565b9150506040830151610c926040860182610c9d565b508091505092915050565b610ca681610f79565b82525050565b610cb581610f79565b82525050565b6000610cc682610bf3565b9150819050919050565b60006020820190508181036000830152610cea8184610a40565b905092915050565b60006020820190508181036000830152610d0c8184610aee565b905092915050565b60006040820190508181036000830152610d2e8185610aee565b9050610d3d6020830184610a31565b9392505050565b60006040820190508181036000830152610d5e8185610aee565b9050610d6d6020830184610cac565b9392505050565b60006020820190508181036000830152610d8d81610b27565b9050919050565b60006020820190508181036000830152610dad81610b8d565b9050919050565b60006020820190508181036000830152610dcd81610c0d565b9050919050565b6000602082019050610de96000830184610cac565b92915050565b6000604082019050610e046000830185610cac565b8181036020830152610e168184610aee565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e4657610e456110b5565b5b8060405250919050565b600067ffffffffffffffff821115610e6b57610e6a6110b5565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610efc82610f79565b9150610f0783610f79565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f3c57610f3b611028565b5b828201905092915050565b6000610f5282610f59565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610fb0578082015181840152602081019050610f95565b83811115610fbf576000848401525b50505050565b60006002820490506001821680610fdd57607f821691505b60208210811415610ff157610ff0611086565b5b50919050565b600061100282610f79565b915061100d83610f79565b92508261101d5761101c611057565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110fe81610f47565b811461110957600080fd5b5056fea26469706673582212203a5fa7ac2d1bf32ac2b0447eb8f40a88c87ef301b03cd74dd1fc8c1a5ed7b43b64736f6c63430008000033","linkReferences":{},"deployedLinkReferences":{}}')},40:function(f,e,b){f.exports=b(58)},45:function(f,e,b){},47:function(f,e){},55:function(f,e){},58:function(f,e,b){"use strict";b.r(e);var a=b(6),t=b.n(a),n=b(32),c=b.n(n),d=(b(45),b(20),b(2)),r=b.n(d),o=b(13);function s(){var f=Object(a.useState)(""),e=Object(o.a)(f,2),b=e[0],n=e[1];return Object(a.useEffect)((function(){!function(){var f,e,b,a;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,f=window,e=f.ethereum){t.next=7;break}return console.log("Make sure you have metamask!"),t.abrupt("return");case 7:console.log("We have the ethereum object",e);case 8:return t.next=10,r.a.awrap(e.request({method:"eth_accounts"}));case 10:0!==(b=t.sent).length?(a=b[0],console.log("Found an authorized account:",a),n(a)):console.log("No authorized account found"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),null,null,[[0,14]])}()}),[]),t.a.createElement("div",{className:"container"},!b&&t.a.createElement("div",null,t.a.createElement("p",null," Connect your wallet "),t.a.createElement("button",{className:"waveButton",onClick:function(){var f,e,b;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,f=window,e=f.ethereum){a.next=7;break}return alert("Get MetaMask"),a.abrupt("return");case 7:return a.next=9,r.a.awrap(e.request({method:"eth_requestAccounts"}));case 9:b=a.sent,console.log("Connected",b[0]),n(b[0]);case 12:a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),console.log(a.t0);case 17:case"end":return a.stop()}}),null,null,[[0,14]])}},"Connect Wallet")))}var i=b(14),l=b(21);function u(){var f=Object(a.useRef)(null),e=Object(a.useRef)(null),b=Object(a.useState)(""),n=Object(o.a)(b,2),c=n[0],d=n[1],s=l.abi;return t.a.createElement("div",{className:"container"},t.a.createElement("form",{className:"quote__form",onSubmit:function(f){var e,b,a,t,n,d;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(f.preventDefault(),o.prev=1,e=window,!(b=e.ethereum)){o.next=16;break}return a=new i.a.providers.Web3Provider(b),t=a.getSigner(),n=new i.a.Contract("0x88A3Ab09ed9e815f97DB737885eDd914580A7361",s,t),o.next=9,r.a.awrap(n.writeQuote(c,{gasLimit:3e5}));case 9:return d=o.sent,console.log("Mining ...",d),o.next=13,r.a.awrap(d.wait());case 13:console.log("Mined ---",d),o.next=17;break;case 16:console.log("Ethereum object doesn't exit!");case 17:o.next=22;break;case 19:o.prev=19,o.t0=o.catch(1),console.log(o.t0);case 22:case"end":return o.stop()}}),null,null,[[1,19]])},ref:e},t.a.createElement("div",{className:"form__field"},t.a.createElement("input",{type:"textarea",name:"quote",id:"form__input",placeholder:"Send a quote...",ref:f,onKeyPressCapture:function(f){13===f.which&&f.preventDefault()},autoComplete:"off",onChange:function(f){d(f.target.value)}})),t.a.createElement("div",{className:"progress-button"},t.a.createElement("button",{className:"waveButton"},"Submit"))))}var m=b(19),p=b(37),w=b.n(p);function v(){var f=Object(a.useState)([]),e=Object(o.a)(f,2),b=e[0],n=e[1],c=l.abi;Object(a.useEffect)((function(){d()}));var d=function(){var f,e,b,a,t,d,o;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,f=window,e=f.ethereum,!window.ethereum){s.next=15;break}return b=new i.a.providers.Web3Provider(e),a=b.getSigner(),t=new i.a.Contract("0x88A3Ab09ed9e815f97DB737885eDd914580A7361",c,a),s.next=8,r.a.awrap(t.getAllQuotes());case 8:d=s.sent,o=[],d.forEach((function(f){o.push({id:w.a.uniqueId(),address:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message})})),n(o),t.on("NewQuote",(function(f,e,b){console.log("NewMessage",f,e,b),n((function(a){return[].concat(Object(m.a)(a),[{address:f,timestamp:new Date(1e3*e),message:b}])}))})),s.next=16;break;case 15:console.log("Ethereum object doesn't exist!");case 16:s.next=21;break;case 18:s.prev=18,s.t0=s.catch(0),console.log(s.t0);case 21:case"end":return s.stop()}}),null,null,[[0,18]])};return t.a.createElement("div",{className:"container",onLoad:d},t.a.createElement("div",null,t.a.createElement("div",{className:"allquotes"},b.map((function(f){return t.a.createElement("div",{className:"quotes",key:f.id},t.a.createElement("div",null," ",f.message),t.a.createElement("div",null,"  written by: ",f.address))})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(t.a.createElement((function(){return t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"container"},t.a.createElement("div",{className:"header"},t.a.createElement("span",{role:"img"},"\ud83d\udc4b "),"   Hey there, send a quote and probably win a fake ethereum"),t.a.createElement("div",{className:"social-link"},"lets connect on socials:",t.a.createElement("a",{href:"http://www.twitter.com/__tbello"}," Twitter"),t.a.createElement("a",{href:"http://www.github.com/t-bello7"},"Github"),t.a.createElement("a",{href:"https://www.linkedin.com/in/tbello7"},"Linkedin"))),t.a.createElement(s,null),t.a.createElement(u,null),t.a.createElement(v,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(f){f.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.b93d820e.chunk.js.map