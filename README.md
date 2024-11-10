
***
</p> <p align="center">
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Rubik+Dirt&size=65&pause=1000&color=F72C3F&background=FF20A500&center=true&vCenter=true&width=1000&height=150&lines=MALAKA-MD;MADE+BY+DARK_ALFHA_MD_V1" alt="Typing SVG" /></a>

</h3>
<img src="https://i.ibb.co/XWggNqz/20241027-181936.jpg" width="300" height="190">
</div>

<a><img src='https://i.imgur.com/LyHic3i.gif'/></a><a><img src='https://i.imgur.com/LyHic3i.gif'/></a>
1. Get Session
   
    <a href='https://pair-web-public.koyeb.app/' target="_blank"><img alt='SESSION ID' src='https://img.shields.io/badge/Session_id-900000?style=for-the-badge&logo=scan&logoColor=white&labelColor=black&color=blue'/></a>
     
<p align="center">
<a href='https://railway.app/new' target="_blank"><img alt='Heroku' src='https://img.shields.io/badge/-railway deploy-blue?style=for-the-badge&logo=railway&logoColor=white'/< width=150 height=28/p></a>

<p align="center">
<a href='https://signup.heroku.com/' target="_blank"><img alt='Heroku' src='https://img.shields.io/badge/-heroku ‎ deploy-blue?style=for-the-badge&logo=heroku&logoColor=white'/< width=150 height=28/p></a>

<p align="center">
<a href="http://koyeb.com" >
<img alt='Koyeb' src='https://img.shields.io/badge/-koyeb deploy-blue?style=for-the-badge&logo=koyeb&logoColor=white'/< width=150 height=28/p></a>

```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
```

