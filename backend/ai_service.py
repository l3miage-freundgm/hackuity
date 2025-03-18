import os
from dotenv import load_dotenv
from mistralai import Mistral

load_dotenv()
api_key = os.environ["MISTRAL_API_KEY"]
model = "mistral-large-latest"

client = Mistral(api_key=api_key)

def generate_vulnerable_contract():
    completion = client.chat.complete(
    model=model,
    messages=[
        {"role": "user", 
        "content": "what is the best french cheese"}
    ]
    )

    response = completion.choices[0].message.content
    print(response)

    # prompt = (
    #     "Generate a short Solidity smart contract that clearly demonstrates one specific security vulnerability. "
    #     "Do NOT provide explanations—only the Solidity code snippet."
    # )

    # completion = client.chat.completions.create(
    #     model="gpt-4-turbo",
    #     messages=[
    #         {"role": "system", "content": "You generate Solidity code with specific vulnerabilities."},
    #         {"role": "user", "content": prompt},
    #     ],
    # )

    # contract_code = completion.choices[0].message.content.strip()
    return response.output_text