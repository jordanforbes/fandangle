# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.create(name: 'John Doe', email: 'john.doe@example.com', password: "password", password_confirmation:"password", role: "user")
theater = Theater.create(name: "movie place", location: "Philadelphia", capacity: 50)
movie = Movie.create(title: "Evil Dead 2", genre: "horror/comedy", duration: 90, description: "a horror movie but the main character is competent")
schedule = Schedule.create(movie_id:1, theater_id:1, date:'2024-08-15', time: '14:00:00')
reservation = Reservation.create(user_id: 1, schedule_id: 1, seat_number:3, movie_id:1, total_price_cents:10000, status: 'pending')
