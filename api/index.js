var express = require('express')
var app = express()

var a = 1

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const products = [{
  id: 1,
  title: 'Product #1',
}, {
  id: 2,
  title: 'Product #2',
}, {
  id: 3,
  title: 'Product #3',
}, {
  id: 4,
  title: 'Product #4',
}];

const catalogs = [
  {
    id: '59d3ee0b-d2a1-455c-a27d-9062764e59d4',
    title: 'Catalog #1'
  },
  {
    id: '5a26df2f-8ebd-47bd-8890-53b543247d33',
    title: 'Catalog #2'
  },
]

app.get('/api/products/:id', express.json(), function (req, res) {
  try {
    const { id } = req.params;
    const product = products.filter(p => p.id === +id);
    console.log(request.headers['x-forwarded-for'])
    if (product.length === 0) {
      res.status(404).json({
        error: 'Object not found'
      });
      return;
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

app.get('/api/catalog/:id', express.json(), function (req, res) {
  try {
    const { id } = req.params;
    const catalog = catalogs.filter(p => p.id === id);
    console.log('ip ' + request.headers['x-forwarded-for'])
    if (catalog.length === 0) {
      res.status(404).json({
        error: 'Object not found'
      });
      return;
    }

    res.json(catalog);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
