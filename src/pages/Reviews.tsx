import React, { useState } from 'react';
import { Star, User, ThumbsUp, Filter, MessageCircle, Award } from 'lucide-react';

const Reviews = () => {
  const [filterRating, setFilterRating] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Marie Dubois',
      rating: 5,
      date: '2024-01-15',
      route: 'Paris to New York',
      class: 'Business',
      review: 'Exceptional service from start to finish. The crew was incredibly attentive, and the food was restaurant quality. The new seats in business class are incredibly comfortable for the long flight. Air France continues to exceed my expectations.',
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      name: 'James Wilson',
      rating: 4,
      date: '2024-01-10',
      route: 'London to Paris',
      class: 'Economy',
      review: 'Great short flight experience. Check-in was smooth, boarding was efficient, and the crew was friendly. The only minor issue was the limited legroom, but that\'s expected in economy. Overall very satisfied with the service.',
      helpful: 18,
      verified: true
    },
    {
      id: 3,
      name: 'Isabella Rodriguez',
      rating: 5,
      date: '2024-01-08',
      route: 'Paris to Tokyo',
      class: 'First Class',
      review: 'Absolutely incredible experience! The first-class cabin is like a private suite. The dining was exceptional with multiple course options. The crew anticipated every need. This is luxury travel at its finest. Worth every penny.',
      helpful: 31,
      verified: true
    },
    {
      id: 4,
      name: 'David Chen',
      rating: 4,
      date: '2024-01-05',
      route: 'Dubai to Paris',
      class: 'Premium Economy',
      review: 'Really impressed with the premium economy experience. Much more comfortable than regular economy with better food and service. The entertainment system had great selection. Would definitely choose this option again.',
      helpful: 15,
      verified: true
    },
    {
      id: 5,
      name: 'Sophie Martin',
      rating: 3,
      date: '2024-01-03',
      route: 'Paris to Rome',
      class: 'Economy',
      review: 'Decent flight overall. Service was professional and flight was on time. The aircraft seemed a bit older compared to other airlines, and the meal could have been better. Still a reliable choice for European travel.',
      helpful: 9,
      verified: true
    },
    {
      id: 6,
      name: 'Michael Brown',
      rating: 5,
      date: '2023-12-28',
      route: 'New York to Paris',
      class: 'Business',
      review: 'Outstanding service! The lie-flat seats made the overnight flight very comfortable. Excellent wine selection and the crew went above and beyond. The airport lounge access was also fantastic. Highly recommended.',
      helpful: 27,
      verified: true
    }
  ];

  const filteredReviews = filterRating === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(filterRating));

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const renderStars = (rating: number, size = 'w-4 h-4') => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MessageCircle className="h-12 w-12 text-amber-400" />
          </div>
          <h1 className="text-6xl font-bold text-amber-400 mb-8 font-serif">Traveler Stories</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Discover what fellow adventurers have to say about their Air France journeys. 
            Every review tells a story, and every story inspires the next adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Rating Overview */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 sticky top-8 border border-gray-700">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-amber-400 mr-3" />
                <h2 className="text-3xl font-bold text-amber-400 font-serif">Overall Rating</h2>
              </div>
              
              <div className="text-center mb-10">
                <div className="text-7xl font-bold text-amber-400 mb-4 font-serif">
                  {averageRating.toFixed(1)}
                </div>
                <div className="mb-4">
                  {renderStars(Math.round(averageRating), 'w-6 h-6')}
                </div>
                <p className="text-gray-300 text-lg">Based on {reviews.length} reviews</p>
              </div>

              <div className="space-y-4 mb-10">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center space-x-4">
                    <span className="text-lg font-bold w-10 text-amber-400">{rating}★</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-lg text-gray-300 w-10 font-medium">{count}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Filter className="h-5 w-5 text-amber-400" />
                  <span className="font-bold text-amber-400 text-lg">Filter by rating</span>
                </div>
                <select 
                  value={filterRating}
                  onChange={(e) => setFilterRating(e.target.value)}
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-amber-400 font-medium text-lg"
                >
                  <option value="all">All Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-gray-800 rounded-2xl shadow-2xl p-8 hover:shadow-amber-400/20 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-amber-400/50">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full p-4 shadow-lg">
                        <User className="h-8 w-8 text-gray-900" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h3 className="font-bold text-amber-400 text-xl font-serif">{review.name}</h3>
                          {review.verified && (
                            <span className="bg-gradient-to-r from-green-400 to-green-500 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 mt-1">
                          <span>{review.route}</span>
                          <span>•</span>
                          <span>{review.class}</span>
                          <span>•</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg font-light">{review.review}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                    <button className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors duration-300 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600">
                      <ThumbsUp className="h-5 w-5" />
                      <span className="font-medium">Helpful ({review.helpful})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-16 bg-gray-800 rounded-2xl border border-gray-700">
                <p className="text-gray-400 text-xl font-light">No reviews found for the selected rating.</p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-12 lg:p-16 text-center border border-amber-400/20">
          <div className="flex justify-center mb-8">
            <Star className="h-16 w-16 text-amber-400 fill-current" />
          </div>
          <h2 className="text-4xl font-bold mb-8 text-amber-400 font-serif">Share Your Adventure</h2>
          <p className="text-2xl mb-12 text-gray-300 font-light max-w-4xl mx-auto">
            Recently traveled with Air France? We'd love to hear about your journey. 
            Your story could inspire someone else's next adventure.
          </p>
          <button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-12 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl">
            Tell Your Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;