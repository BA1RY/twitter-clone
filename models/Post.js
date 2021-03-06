const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String
    },
    last: {
      type: String
    }
  },
  avatar: {
    type: String
  },
  handle: {
    type: String
  },
  count: {
    likes: {
      type: Number,
      default: 0
    },
    comments: {
      type: Number,
      default: 0
    },
    retweet: {
      type: Number,
      default: 0
    }
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      name: {
        first: {
          type: String
        },
        last: {
          type: String
        }
      },
      avatar: {
        type: String
      },
      handle: {
        type: String
      },
      text: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      },
      count: {
        likes: {
          type: Number,
          default: 0
        }
      },
      likes: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
          }
        }
      ]
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  retweet: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  isretweet: {
    value: {
      type: Boolean,
      default: false
    }, 
    post: {
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }
  }
});

module.exports = Post = mongoose.model('post', postSchema);