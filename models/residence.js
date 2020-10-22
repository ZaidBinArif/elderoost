const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const NewsArticle = require('./news_article');
const Review = require('./review');

// TODO: Finish off translating residence table

// TODO: Custom slug generator?
// Dynamic somehow?
// name_and_address_state ==> slug
// name.toLowerCase(); address_state.toLowerCase()
// const slug = `${name.toLowerCase()} ${address_state.toLowerCase()}`;
// const slugified = slug.replace(/ /g,'-');

// TODO : Convert two more custom slugs : 1 :
// def set_address_city_slug
//   self.address_city_slug = "#{address_city.downcase.gsub(' ', '-').gsub(".", '').gsub("'", '')}-canada" if attribute_present?("address_city")
// end

// TODO : Convert two more custom slugs : 2 :
// def set_address_state_slug
//   self.address_state_slug = "#{address_state.gsub(' ', '-').downcase}-canada" if attribute_present?("address_state")
// end

// TODO: Relations
// has_many :reviews
// has_many :news_articles

const Residence = sequelize.define(
  'residence',
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    alternate_name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    latitude: {
      type: Sequelize.DECIMAL
    },
    longitude: {
      type: Sequelize.DECIMAL
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    url: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING,
      defaulValue: 'pending'
    },
    address_num: {
      type: Sequelize.INTEGER
    },
    address_street: {
      type: Sequelize.STRING
    },
    address_state: {
      type: Sequelize.STRING
    },
    address_city: {
      type: Sequelize.STRING
    },
    address_country: {
      type: Sequelize.STRING
    },
    postal_code: {
      type: Sequelize.STRING
    },
    slug: {
      type: Sequelize.STRING,
      unique: true
    },
    address_city_slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address_state_slug: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    underscored: true
  }
);

Residence.sync({ force: true });
Residence.hasMany(NewsArticle, { foreignKey: 'residence_id' });
NewsArticle.belongsTo(Residence);
Residence.hasMany(Review, { foreignKey: 'residence_id' });
Review.belongsTo(Residence);

module.exports = Residence;
