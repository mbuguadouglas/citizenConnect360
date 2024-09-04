# citizenConnect360 [![wakatime](https://wakatime.com/badge/user/018d2724-5245-41f2-bacd-7b68daa01c31/project/95d83951-2aee-4c20-95d6-52ec9742e9c0.svg)](https://wakatime.com/badge/user/018d2724-5245-41f2-bacd-7b68daa01c31/project/95d83951-2aee-4c20-95d6-52ec9742e9c0)
I am building this project to educate the general masses on government documents (e.g bills being discussed in parliament), Facilitate issue reporting and feedback to the government. It will utilize AI to analyze citizen input and support informed decision-making generally promoting citizen engagement and government responsiveness.


## Contributing to Black Python Devs Projects

Follow these steps to begin contributing:

- First step is to set up the local development environment.
- Bug fixes are always welcome. Start by reviewing the list of bugs.
- A good way to easily start contributing is to pick and work on a good first issue. I try to make these issues as clear as possible and provide basic info on how the code should be changed, and if something is unclear feel free to ask for more information on the issue. I will respond as soon as I can.

## How to Contribute

> Prerequisites.
>> 1. You need to have MsSQL installed and running on your local machine
>> 2. You need to have a Python compiler and a C/C++ compiler on your local machine 


1. Fork the repository by clicking on the `Fork` button in the main repository page.

1. Clone your forked repository into your local machine.
```bash
    $ git clone https://github.com/<username>/citizenConnect360/
```

1. Navigate into the directory. The project requires 3 servers running simultaneously, as such it would be best to open up 3 terminals.
```bash
    $ cd citizenConnect
```

#### Terminal 1

- Navigate to the backend repository
```bash
    $ cd backend
```

- Open the project on your favourite text editor and input your environment variables. Copy values from the `.env.example` and create a new file `.env` inputting your values.

- Install all the neccessary dependencies and packages.
```bash
    $ npm install
```

- Run the server
```bash
    $ npm start
```

#### Terminal 2

- Navigate to the backgroundServices repository
```bash
    $ cd backgroundServices
```

- Open the project on your favourite text editor and input your environment variables. Copy values from the `.env.example` and create a new file `.env` inputting your values.


- Install all the neccessary dependencies and packages.
```bash
    $ npm install
```

- Run the server
```bash
    $ npm start
```

#### Terminal 3

- Navigate to the frontend repository
```bash
    $ cd frontend
```

- Run the ng command that installs runs the frontend webpage
```bash
    $ ng serve -o
```

1. Make your changes, commit and push them to your local repository, then submit a Pull Request. 



