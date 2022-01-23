# fleo

- Make an .env file and copy .example.env.txt to it.

- Geetings from developer (GET - /)

- To ADD a new category (POST - /api/category/addCategory) <br>
  JSON Format required <br>
  { <br>
  "name":"factory123325",<br>
  "currentSales":1000000,<br>
  "totalTarget":3000000<br>
  }

- To FIND a category by name (GET - /api/category) <br>
  JSON Format required <br>
  { <br>
  "name":"factory123325"<br>
  }

- To UPDATE a category by name (PUT - /api/category/edit) <br>
  JSON Format required <br>
  { <br>
  "name":"factory123325",<br>
  "currentSales":2000000,<br>
  "totalTarget":3000000<br>
  }
