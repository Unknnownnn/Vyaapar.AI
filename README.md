![VyaaparAI](https://github.com/user-attachments/assets/51b3fdbc-ea29-4bc2-8c6f-30f8cbe70c2f)
# *Vyapaar.AI* - Your Gateway to Startup Investments

Problem Statement

The startup ecosystem is rapidly growing, with over 30 million startups globally and thousands of new ones emerging each year. However, one of the most significant challenges facing retail investors is determining which startups will succeed and which will fail. Venture Capitalists (VCs) have exclusive tools and data to make decisions, but retail investors are left with minimal access to insights and thus shy away from investing in high-risk, high-reward startup opportunities.

The uncertainty surrounding startup success, combined with the lack of reliable prediction models, has made it difficult for non-institutional investors to confidently invest in startups. On top of that, existing solutions like stock market investments provide only a limited view of future growth and often lack transparency.

Vyapaar seeks to revolutionize how retail investors approach startup investments by leveraging cutting-edge AI/ML models, blockchain transparency, and real-time data to predict startup success, manage investment risk, and ensure transparency.
---
Project Overview

This project is a Startup Success Prediction Model that combines Generative Adversarial Networks (GANs) and Reinforcement Learning (RL) to forecast the future success of startups. The model predicts startup success probabilities based on historical data and simulates various startup scenarios, including actions like raising funds, expanding markets, and cost management. The system uses GANs to generate future outcomes and RL to optimize startup strategies dynamically.
<br>
## *Table of Contents*

1. [Introduction](#introduction)
2. [Features](#features)
3. [How It Works](#how-it-works)
4. [Technology Stack](#technology-stack)
5. [AI Model](#ai-model)
6. [Blockchain Integration](#blockchain-integration)
7. [Installation Guide](#installation-guide)
8. [Usage](#usage)
9. [Security](#security)
10. [License](#license)
---

## *Introduction*

*Vyapaar.AI* is a next-gen investment platform that brings startups and investors together. We provide investors with deep insights, backed by AI, and ensure transparency and security with blockchain. With the added power of *smart contracts* and *tokenization*, your investment journey is easier and more reliable than ever.

The image outlines the flow of information between companies, users, and smart contracts, with highlights like:
- Company registration and verification via oracles.
- User dashboard with AI-driven insights.
- Web3 wallet integration for secure transactions.

---

## *Features*

- *AI-Driven Financial Analysis*: Tailored insights using AI for evaluating startups' fiscal health, market potential, and long-term viability.
- *Smart Contract Integration*: Automated agreements executed securely on blockchain.
- *Tokenized Startup Investments*: Shares are converted into tokens for enhanced liquidity and transferability.
- *Secure User Wallet (Khatta)*: Manage your tokens and investments with a web3 wallet integrated within the platform.
- *Real-Time Valuation Updates*: Companies’ milestones and progress trigger real-time valuation changes, verified by blockchain oracles.

---

## *How It Works*

![FlowChart](https://github.com/user-attachments/assets/0d6c73a3-0972-4384-9c60-1afb8669b09c)

### *Company Side*
1. *Company Registration*: Startups fill in their relevant details.
2. *Milestones*: Companies update their progress as they achieve key milestones.
3. *Verification*: All information is verified through blockchain oracles.
4. *Smart Contract Issuance*: Tokens are minted for investors once the startup is verified.

### *User Side*
1. *Dashboard of Investments*: Users can track their investments in real-time.
2. *AI-Powered Insights: Tools like **Venture Vitals, **Fiscal Fitness, and **Market Mojo* evaluate companies' growth prospects based on AI and web scraping.
3. *Tokenized Investments*: Easily buy, sell, or transfer your tokens to another user via the Khatta wallet.
4. *Valuation Updates*: Token values are dynamically updated based on company performance and milestones.

---

## *Technology Stack*

### *Frontend*
- React.js for user interfaces.
- HTML/CSS/JavaScript.
- ![Frontend Video](https://github.com/user-attachments/assets/b6d394c9-0e03-4f9b-8a29-2e9d6b41f781)
- ![Vyaapar.AI HomePage](https://github.com/user-attachments/assets/1775d174-cb00-4747-9048-9a6cc09d2cfd)
- ![Vyaapar.AI Portfolio Page](https://github.com/user-attachments/assets/8501707c-0e09-412f-b23e-05e392811970)
- ![Vyaapar.AI Companies](https://github.com/user-attachments/assets/274da1bc-cc58-4c59-8526-7582aea652f5)
- ![Vyaapar.AI Web3 Login Page](https://github.com/user-attachments/assets/bc2d1540-8331-4625-bf26-a0bb356c6411)

### *Backend*
- Node.js for server-side logic.
- Python for AI model and data handling.


### *AI & ML*!
![AI 1](https://github.com/user-attachments/assets/78936327-cf55-4c1a-ac33-700be8c80ccc)
Technical Solution - AI/ML Models

Vyapaar uses a multi-model AI system that leverages the power of machine learning, deep learning, and simulation models:
1. Artificial Neural Network (ANN)

    Objective: Predict whether a startup will be acquired or successful in the future based on a set of financial and operational parameters.
    Implementation: The ANN model is trained on historical data, such as funding rounds, market growth, customer retention, team strength, and acquisition history to output a binary prediction of acquisition or failure.

2. XGBoost for Financial Scoring

    Objective: Provide a current financial score for each startup, based on variables such as funding, revenue, liabilities, customer base, and operational metrics.
    Contribution to the System: This score forms the baseline input for further simulations and GAN modeling. It gives a quick snapshot of the startup's current financial health and serves as a starting point for future scenario generation.

3. Generative Adversarial Networks (GANs)

    Objective: Generate synthetic future scenarios for startups, such as possible market shifts, new competition, or funding events.
    Implementation: GANs consist of a generator (which creates possible future scenarios) and a discriminator (which evaluates the realism of those scenarios). Over time, the GAN refines its predictions by learning from historical and newly generated data.
    Usage: GAN models are used to generate plausible future market conditions and test how startups might react to these conditions, creating new data points for Monte Carlo simulations and reinforcement learning.

4. Monte Carlo Simulation

    Objective: Assess risk and uncertainty by running thousands of iterations to simulate various future outcomes.
    Implementation: The Monte Carlo simulation runs various scenarios generated by the GAN and tests the startup's success probabilities under different assumptions (e.g., market growth, funding shortages, competition).
    Outcome: Provides a probabilistic range of outcomes, which helps investors understand both the best-case and worst-case scenarios for their investments.

5. Reinforcement Learning (RL)

    Objective: Optimize the startup’s investment strategies (e.g., raising funds, expanding markets) to maximize success probabilities.
    Implementation: The RL agent is trained to take actions like expanding or cutting costs in response to market conditions, ensuring the startup adapts optimally to various economic or operational conditions.
    Usage: The RL agent learns from both the GAN-generated data and Monte Carlo outcomes, constantly refining its decisions for maximizing startup growth.
Simulating Different Scenarios Using Ranges

Monte Carlo is particularly powerful when you don’t have exact data, as it simulates a range of possibilities:

    Randomly Generated Inputs: Instead of needing precise retention or growth rates, Monte Carlo will test thousands of different values for those variables within a plausible range. For example, it could assume that the startup’s retention rate lies between 60% and 90% and then test how changes within that range affect the startup’s success.
    GAN’s Ability to Model Hypothetical Competitor Behavior

GANs are great at creating synthetic data, which means they can generate plausible competitor actions or market dynamics, even if you don’t have historical data on those specific events:

    Hypothetical Competitor Actions: Based on historical startup success patterns, GANs can generate a hypothetical future competitor and simulate actions like price cuts or feature enhancements. These actions don’t have to be real data but are projections based on similar past market disruptions.
- TensorFlow/PyTorch for predictive modeling.
- Web scraping integrated to fetch market data.

### *Blockchain*
- Solidity for smart contract development including Minting,Updation, Dynamic Valuation and more.
- Web3.js for wallet integration.
- React.js for web app
Blockchain ensures that all startup investments are secure, transparent, and efficient.

    Smart Contracts:
        Automate milestone-based payments to startups.
        Investors can track whether startups are hitting performance targets in real-time, and payments are automatically released when conditions are met.
        Valuation adjustments happen transparently and automatically based on the output from the AI models (financial score, risk simulation).

    Ownership Representation through NFTs:
        Startup equity can be tokenized through Non-Fungible Tokens (NFTs) that represent ownership. These tokens are traceable, divisible, and tradeable on the blockchain.
        Investors can trade tokens, representing their ownership, securely on the blockchain, ensuring liquidity and easy exit strategies.

    Transaction Security:
        All transactions between startups and investors are stored on a decentralized ledger, ensuring tamper-proof records.
        By decentralizing the investment process, trust is guaranteed, and investors can monitor their investments in real-time.

Starting node on hardhat:

![Screenshot 2024-10-05 103319](https://github.com/user-attachments/assets/d9c81da2-330e-41a2-a027-1c21fa28137f)

Starting WebApp:

![Screenshot 2024-10-05 103350](https://github.com/user-attachments/assets/60bbb56c-0d6a-40d3-a0e1-1fdc8b7fa219)

Minting new company using metamask:

![Screenshot 2024-10-05 103201](https://github.com/user-attachments/assets/6c4ce1dc-f8fc-4edc-af14-3c07b75ff231)

![Screenshot 2024-10-05 103216](https://github.com/user-attachments/assets/09569266-dfba-411a-98ab-88e90e2e26fe)

Valuation update:


![Screenshot 2024-10-05 103231](https://github.com/user-attachments/assets/43707f4e-35ec-4fa7-9c16-479ccec3366e)

![Screenshot 2024-10-05 103237](https://github.com/user-attachments/assets/00c1c09e-03be-42bc-912d-21046619cc53)

---

## *AI Model*

At the core of *Vyapaar.AI* is an advanced AI model that analyzes the fiscal health of startups and evaluates their potential growth. The AI considers:
- Financial metrics, historical data, and market sentiment.
- Predictive scores like *VC Scores* that help users gauge startup viability.
- Real-time scraping of market trends for updated data.

---

## *Blockchain Integration*

The platform integrates blockchain in several key ways:
- *Tokenization of shares*: Startups' equity is transformed into blockchain tokens, which can be easily traded or transferred between users.
- *Smart Contracts*: Investment agreements and valuations are secured using Ethereum smart contracts.
- *Oracle verification*: Data is validated using oracles to ensure reliability and transparency in milestones.

---

⚡ Intel OneAPI Tools
Intel Tool-Kits Used
Sno	Intel Product Used	Description
1	Intel® Distribution for Python®	We are using this toolkit as it provides optimized Python libraries for numerical computing and data manipulation
2	Intel® OpenVINO™	We are making the process of implementing Q-LoRA faster using OpenVINO
3	Intel® DevCloud	DevCloud offers a valuable environment for our project
## *Installation Guide*

### *Prerequisites*
- Node.js, Python, Metamask, HardHat, React.js, Web3.js.

### *Setup*
1. *Clone the repository*:
   bash
   git clone [https://github.com/Unknnownnn/Vyaapar.ai_oneAPI_hack_kpr]
   
2. *Install dependencies*:
   bash
   npm install
   pip3 install pipreqs
   
3. *Setup environment variables* for API keys, blockchain access, etc.
   
4. *Start the application*:
   bash
   npm run start
   

---

## *Usage*

- *For Startups*: Register your company, fill in relevant details, and update milestones for investors to track.
- *For Investors*: Browse available startups, leverage AI insights, invest using tokens, and monitor investments through the dashboard.
- *Token Transfer: Easily transfer tokens between users through **Khatta*, your integrated web3 wallet.


---

## *Security*

*Vyapaar.AI* prioritizes:
- *Blockchain Ledger*: Immutable and transparent transaction records.
- *Data Encryption*: Secure data handling and storage.

---
Conclusion

Vyapaar leverages AI/ML models and blockchain technology to revolutionize startup investments, making them accessible, transparent, and secure for retail investors. By providing a comprehensive risk assessment using cutting-edge models like XGBoost, GANs, and RL, and securing transactions with blockchain, Vyapaar democratizes high-potential investment opportunities, ensuring retail investors can confidently invest in the future of innovation.

## *License*

This project is licensed under the MIT License.

---


This structure integrates the concepts and flows presented in the image, covering both company and user perspectives, AI analysis, and blockchain functionality.
