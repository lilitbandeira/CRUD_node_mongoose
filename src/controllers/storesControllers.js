const Store = require('../models/store')

const createStore = async (req, res) => {
  const store = new Store({
    name: req.body.name,
    webpage: req.body.webpage,
    category: req.body.category,
    street: req.body.street,
    number: req.body.number,
    city: req.body.city,
    state: req.body.state
  })

  try {
    const newStore = await store.save()
    res.status(201).json(newStore)
  }
  catch(err) {
    res.status(400).json({message: err.message})
  }
}

const listStores = async (req, res) => {
  try {
    const stores = await Store.find()
    res.status(200).json(stores)
  }
  catch(err) {
    res.status(500).json({message: err.message})
  }
}

const updateStore = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id)
    const body = req.body
    
    if(store == null) res.status(400).json({ message: "Loja não encontrada"})

    Object.keys(body).forEach(key => {
      store[key] = body[key]
    })
   
    const updatedStore = await store.save()
    res.status(200).json(updatedStore)
  }
  catch(err) {
    res.status(500).json({ message: err.message })
  }
}

const deleteStore = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id)
    if(store == null) res.status(400).json({ message: "Loja não encontrada"})

    await store.remove()
    res.status(200).json({ message: "Loja Deletado da base de dados!"})
  }
  catch(err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  createStore,
  listStores,
  updateStore,
  deleteStore,
}
