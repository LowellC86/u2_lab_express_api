const { Schema } = require('mongoose')
const Reviews = new Schema
(

  {
    movieID: { type: Schema.Types.ObjectId, ref: 'movies_id' },
    score: { type: Number, required: true },
    comment: { type: String, required: true },
   
},
  { timestamps: true }
)

module.exports = Reviews