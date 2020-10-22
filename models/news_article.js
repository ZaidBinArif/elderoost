const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const NewsArticle = sequelize.define(
  'news_article',
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    author_names: {
      type: Sequelize.STRING
    },
    headline: {
      type: Sequelize.STRING
    },
    publisher: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: `pending`
    },
    publication_date: {
      type: Sequelize.DATE
    },
    retrieved_date: {
      type: Sequelize.DATE
    }
  },
  {
    underscored: true
  }
);

NewsArticle.sync({ force: true });

module.exports = NewsArticle;
