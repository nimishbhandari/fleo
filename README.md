# fleo

- Geetings from developer (GET - /)

- To add a new category (POST - /api/category/addCategory) <br>
  JSON Format required <br>
  { <br>
  "name":"factory123325",<br>
  "currentSales":1000000,<br>
  "totalTarget":3000000<br>
  }

- To find a category by name (GET - /api/category) <br>
  JSON Format required <br>
  { <br>
  "name":"factory123325"<br>
  }

- To update a category by name (PUT - /api/category/edit) <br>
  JSON Format required <br>
  { <br>
  "name":"factory123325",<br>
  "currentSales":2000000,<br>
  "totalTarget":3000000<br>
  }
