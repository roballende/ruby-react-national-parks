puts "🌱 Seeding spices..."

# Seed your database here
User.create(name: "Abby",password: "password")
User.create(name: "Brooke", password: "password")
User.create(name: "David", password: "password")
User.create(name: "Eleanor", password: "password")

puts "✅ Done seeding!"
