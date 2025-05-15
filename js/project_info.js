export const MAX_TAGS = 10;     // how many pills to show before “[…]”
export const MAX_DESC = 250;   // max chars in card view

export const projects = [
    {
        title: 'NFT Credential Issuance',
        img: 'images/nft_map.png',
        blurb: `This is a NFT credential issuing platform where verified credential issuers such as universities
                and other institutions may issue digital certificates in the form of non-fungible tokens. Employers
                and hiring companies can verify credentials.`,
        longform_desc: `This is a NFT credential issuing platform where verified credential issuers such as universities
                and other institutions may issue digital certificates in the form of non-fungible tokens. Employers
                and hiring companies can verify credentials.\\
                This is a potential blockchain based solution for solving the issue of unverifiable experience and/or
                education. We utilize Solidity smart contracts, React frontend, and PostgreSQL backend.\\
                Credential hashes, issuer & owner identity, and verifications are stored on-chain, whereas the detailed 
                metadata is stored off-chain in the SQL database.`,
        link: 'https://github.com/kreshank/NFT-Credential-Issuance',
        tags: [
            'Solidity',
            'AWS',
            'PostgreSQL',
            'React',
            'RESTful API',
        ]
    },
    {
        title: 'WordHunt Clone',
        img: 'images/bitinfonepal.png',
        blurb: `This is a iOS WordHunt clone that includes a built in solver, and custom board builds and shapes, along with 
                board seeds. Frontend and backend is built purely in C++ and C using ImGui interface.`,
        longform_desc: `Longer description, possibly MD formatted`,
        link: 'https://github.com/kreshank/WordHunt-App',
        tags: [
            'C++',
            'C',
        ]
    },
    {
        title: 'BistroPOS',
        img: 'images/bitinfonepal.png',
        blurb: `Restaurant point-of-sale system with integrated credit card processing and order printing. 
                Provides detailed business analytics with cloud-based machine learning. Compliant with all PCI standards.`,
        longform_desc: `This is a restaurant point-of-sale system. Offers the ability to process credit card transactions through
                a business' card reader of choice, or our own. Integrated order printing and provides business analytics.
                Compliant with all PCI standards.\\
                `,
        link: 'https://github.com/kreshank/WordHunt-App',
        tags: [
            'React Native',
            '.NET',
            'Kotlin',
            'RESTful API',
            'C#',
            'Python',
            'Machine Learning',
            'Cloud Computing',
        ]
    },
    {
        title: 'StockHome',
        img: 'images/stockhome.png',
        blurb: `This is a OCaml/Python program that pulls stock data from the Yahoo Finance API for a user to manipulate or 
                track. Using data from the API, a user can build a portfolio, track stock data, save and write configurations, 
                and more.`,
        longform_desc: `Can make *portfolios*, track your stuff real time, etc....`,
        link: 'https://github.com/kreshank/StockHome',
        tags: [
            'OCaml',
            'Python',
            'YFinance',
        ]
    },
    {
        title: 'Image Compression',
        img: 'images/bitinfonepal.png',
        blurb: `Image compression using numerical methods; Householder QR factorization to decrease file size by 70%.`,
        longform_desc: `BENCHMARK, MATH STUFF, etc`,
        link: 'https://bitinfonepal.com',
        tags: [
            'OCaml',
            'Python',
            'YFinance',
        ]
    },
    {
        title: 'HeartBridge',
        img: 'images/bitinfonepal.png',
        blurb: `Chat moderator and warning system to prevent sending messages that you will regret.`,
        longform_desc: `BENCHMARK, MATH STUFF, etc`,
        link: 'https://bitinfonepal.com',
        tags: [
            'Python',
            'PyTorch',
            'React Native',
        ]
    },
    {
        title: 'Appiphany',
        img: 'images/bitinfonepal.png',
        blurb: `Find the app that you didn't know you needed. A fast vector database to find apps matching a text input description.`,
        longform_desc: `BENCHMARK, MATH STUFF, etc`,
        link: 'https://bitinfonepal.com',
        tags: [
            'Python',
            'Vector Databases',
            'JS',
            'Flask',
            'SQL',
            'Machine Learning',
            'NLP',
        ]
    },
    {
        title: 'Molecular Configurations',
        img: 'images/bitinfonepal.png',
        blurb: `Find and visualize stabilize molecular configurations. 
                We implemented gradient descent with step size following the Armijo conditions for fast convergence. 
                There's also an alternative implementation utilized BFGS and line search obeying the Wolfe conditions 
                for extremely fast convergence.`,
        longform_desc: `BENCHMARK, MATH STUFF, etc`,
        link: 'https://bitinfonepal.com',
        tags: [
            'Python',
            'Numerical Methods',
        ]
    },
    {
        title: 'rw-cmlib',
        img: 'images/bitinfonepal.png',
        blurb: `Math and linalg library built in pure C++, limited to only using standard library functions. Optimized
                for fast large calculations and decryption.`,
        longform_desc: `BENCHMARK, MATH STUFF, etc`,
        link: 'https://bitinfonepal.com',
        tags: [
            'C++',
            'LLO',
            'Concurrency',
        ]
    },
];