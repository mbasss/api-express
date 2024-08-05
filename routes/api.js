import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    title: `Hello ${req.query.name}, umur ${req.body.age}`,
  }); 
})

router.post('/', (req, res) => {
  res.json({
    title: `Hello ${req.body.name}, umur ${req.body.age}`,
  })
})

export default router;