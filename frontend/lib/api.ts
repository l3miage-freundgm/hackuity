export async function fetchContract() {
    const res = await fetch("http://localhost:8000/generate_contract");
    if (!res.ok) throw new Error("Failed to fetch contract");
    const data = await res.json();
    return data.contract;
  }

export async function fetchVulnerabilityExplanation() {
const response = await fetch("http://localhost:8000/vulnerability_explanation");
if (!response.ok) throw new Error("API request failed");
return response.json();
}

//EXPLANATION JSON EXAMPLE
// {
//     "title": "Re-entrancy Vulnerability",
//     "introduction": "Re-entrancy occurs when a contract makes an external call without first updating its state...",
//     "history": "The DAO hack (2016) was the most famous incident, where attackers exploited re-entrancy to steal millions...",
//     "detailedExplanation": "The vulnerability allows an attacker’s contract to repeatedly call back into the victim contract...",
//     "examples": [
//       "DAO Hack of 2016",
//       "Uniswap/Lendf.me incident (2020)",
//       "Cream Finance exploit (2021)"
//     ],
//     "securePractices": [
//       "Use Checks-Effects-Interactions pattern",
//       "Use Re-entrancy Guards (OpenZeppelin)",
//       "Avoid calling external contracts after state changes"
//     ],
//     "references": [
//       "https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/",
//       "https://docs.openzeppelin.com/contracts/5.x/api/security#ReentrancyGuard"
//     ]
//   }
  
  