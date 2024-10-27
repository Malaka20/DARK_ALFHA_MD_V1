# DARK_ALFHA_MD_V1
A ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ whatsapp bot

</h3>
<img src="https://i.ibb.co/XWggNqz/20241027-181936.jpg" width="300" height="190">
</div>

1. Get Session
   
    
     <a href='https://toxic-alexa-qr92-4bcc7b3bfc2c.herokuapp.com' target="_blank"><img alt='SESSION ID' src='https://img.shields.io/badge/Session_id-100000?style=for-the-badge&logo=scan&logoColor=white&labelColor=black&color=black'/></a>


     <hr>
<h5>👩‍💻 Deploy Free Koyeb👇</h5>
<a href="http://koyeb.com" ><img src="https://i.ibb.co/t4KftP0/images.png width="50" height="25"></a>
<hr>
<h5>👩‍💻 Deploy Free Workflows 👇</h5>

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

