eric = User.create(username: "eric", password:"123")
tony = User.create(username: "tony", password:"123")

Snack.create(name:"Nutella", user: eric)
4.times do
  Snack.create(name: Faker::Dessert.variety, user: eric )
end
5.times do
  Snack.create(name: Faker::Dessert.topping, user: eric )
end
5.times do
  Snack.create(name: Faker::Food.vegetables, user: tony)
end
5.times do
  Snack.create(name: Faker::Food.fruits, user: tony)
end
