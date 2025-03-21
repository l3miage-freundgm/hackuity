# Hackuity: Interactive Solidity Security Platform

Hackuity is a professional, AI-powered learning platform that teaches smart contract security through interactive scenarios. The platform provides deep insights into real vulnerabilities, complete with historical context, secure practices, and references—all designed to simplify your smart contract security learning experience.

## Features

- **Interactive Learning:** Engage with real-world examples to identify and understand smart contract vulnerabilities.
- **In-Depth Analysis:** Gain historical context and secure coding practices to prevent common pitfalls.
- **AI-Powered Insights:** Leverage AI (planned integration with Mistral AI or OpenAI) to enhance your learning experience with tailored feedback and analysis.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Python (FastAPI)
- **AI Integration:** Planned integration with Mistral AI or OpenAI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Python 3.8+](https://www.python.org/downloads/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/hackuity.git
    cd hackuity
    ```

2. **Install Frontend Dependencies:**

    ```bash
    cd frontend
    npm install
    ```

3. **Install Backend Dependencies:**

    ```bash
    cd ../backend
    pip install -r requirements.txt
    ```

### Running the Application

- **Start the Frontend:**

    ```bash
    cd frontend
    npm run dev
    ```

- **Start the Backend:**

    ```bash
    cd backend
    uvicorn main:app --reload
    ```

Once both servers are running, open your browser and navigate to `http://localhost:3000` to explore Hackuity.

## Contributing

Contributions are welcome! If you'd like to help improve Hackuity, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Open a pull request detailing your modifications.

For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

