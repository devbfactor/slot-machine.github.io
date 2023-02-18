const contractAddress = "0x6Fc7aB242fbDAa6673C7814fD7f3210610FDbfB8";
const contractABI = [{
    "inputs": [
        {
            "internalType": "uint64",
            "name": "subscriptionId",
            "type": "uint64"
        },
        {
            "internalType": "uint256",
            "name": "minBet",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "have",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "want",
            "type": "address"
        }
    ],
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "jackpotWinner",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
        }
    ],
    "name": "JackpotWinner",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "winner",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
        }
    ],
    "name": "Niner",
    "type": "event",
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "requestId",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "slot1",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "slot2",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "slot3",
            "type": "uint256"
        }
    ],
    "name": "RequestFulfilled",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "requestId",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint32",
            "name": "numWords",
            "type": "uint32"
        }
    ],
    "name": "RequestSent",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "winner",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
        }
    ],
    "name": "Short",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "WithdrawTransaction",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "minimumBetTransaction",
    "type": "event"
},
{
    "inputs": [],
    "name": "_minimumBet",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "_address",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_requestId",
            "type": "uint256"
        }
    ],
    "name": "getRequestStatus",
    "outputs": [
        {
            "internalType": "bool",
            "name": "fulfilled",
            "type": "bool"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "name": "lastRequestId",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }
    ],
    "name": "minimumBet",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "requestId",
            "type": "uint256"
        },
        {
            "internalType": "uint256[]",
            "name": "randomWords",
            "type": "uint256[]"
        }
    ],
    "name": "rawFulfillRandomWords",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "s_requests",
    "outputs": [
        {
            "internalType": "bool",
            "name": "fulfilled",
            "type": "bool"
        },
        {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "slot1",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "slot2",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "slot3",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "spin",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}
];

let contract;
let signer;
const provider = new ethers.providers.Web3Provider(window.ethereum, 80001);
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );
    });
});

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const symbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let spinInterval;
        
async function spin() {
    const msgValue = 1000000000000000;
    const startSpin = contract.spin({ value: msgValue });
    await startSpin;
    let i = Math.floor(Math.random(0 % 9) + 1);
    let j = Math.floor(Math.random(0 % 9) + 1);
    let k = Math.floor(Math.random(0 % 9) + 1);
    let spinInterval = setInterval(function () {
        i = (i + 1) % symbols.length;
        j = (j + 2) % symbols.length;
        k = (k + 3) % symbols.length;
        document.getElementById("slot1").innerHTML = symbols[i];
        document.getElementById("slot2").innerHTML = symbols[j];
        document.getElementById("slot3").innerHTML = symbols[k];
    }, 100);
    let resultLog = await getResults();
    console.log(resultLog);
    // let results = resultLog.map((result) => {
    //     if (result === 1) {
    //         return "🍊";
    //     } else if (result === 2) {
    //         return "🍑";
    //     } else if (result === 3) {
    //         return "🍏";
    //     } else if (result === 4) {
    //         return "🍐";
    //     } else if (result === 5) {
    //         return "🍍";
    //     } else if (result === 6) {
    //         return "🥭";
    //     } else if (result === 7) {
    //         return "🍎";
    //     } else if (result === 8) {
    //         return "🍉";
    //     } else if (result === 9) {
    //         return "🍇";
    //     }
    // })
    // console.log(results);
    setTimeout(() => { 
        // change to the parameter of if to results if you want to use fruits for symbols
        if (resultLog) {
            clearInterval(spinInterval);
            document.getElementById("slot1").innerHTML = resultLog[0];
            document.getElementById("slot2").innerHTML = resultLog[1];
            document.getElementById("slot3").innerHTML = resultLog[2];
            const modal = document.getElementById("modal");
            modal.style.display = "block";
        }
    }, 5000)

}

async function getResults() {
    const slot1 = await contract.slot1();
    const slot2 = await contract.slot2();
    const slot3 = await contract.slot3();
    const result1 = Math.trunc(slot1);
    const result2 = Math.trunc(slot2);
    const result3 = Math.trunc(slot3);
    dataIsReceived = true;
    return [result1, result2, result3];
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}