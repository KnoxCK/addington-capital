# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Transaction.destroy_all
User.destroy_all
Category.destroy_all
PressRelease.destroy_all
CaseStudy.destroy_all

Transaction.create!(value: 853)
User.create(email: 'guv@test.com', password: '123456', admin: true)
Category.create(name: 'Retail')
Category.create(name: 'Residential')
Category.create(name: 'Offices')

PressRelease.create(title: 'Press and Media Test', first_paragraph: 'This is the first paragraph. This is the first paragraph. This is the first paragraph.', body: 'This is the body This is the body This is the body. This is the bodyThis is the body This is the body. This is the body This is the body This is the body This is the body This is the body.This is the body This is the body This is the body This is the body This is the body. This is the body This is the body This is the body This is the body. This is the body.', date: '03-Mar-2017', photo: 'http://lorempixel.com/400/300/')

CaseStudy.create(title: 'Retail Case Study Test', summary: 'Retail case study summary. Retail case study summary. Retail case study summary. Retail case study summary.', description: 'Retail case study description. Retail case study description. Retail case study description. Retail case study description. Retail case study description. Retail case study description. Retail case study description. Retail case study description. Retail case study description.', photo: 'http://lorempixel.com/400/300/', category_id: 1)
CaseStudy.create(title: 'Residential Case Study Test', summary: 'Residential case study summary. Residential case study summary. Residential case study summary. Residential case study summary.', description: 'Residential case study description. Residential case study description. Residential case study description. Residential case study description. Residential case study description. Residential case study description. Residential case study description. Residential case study description. Residential case study description.', photo: 'http://lorempixel.com/400/300/', category_id: 2)
CaseStudy.create(title: 'Offices Case Study Test', summary: 'Offices case study summary. Offices case study summary. Offices case study summary. Offices case study summary.', description: 'Offices case study description. Offices case study description. Offices case study description. Offices case study description. Offices case study description. Offices case study description. Offices case study description. Offices case study description. Offices case study description.', photo: 'http://lorempixel.com/400/300/', category_id: 3)
