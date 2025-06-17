
import React from 'react';
import { Star, Download, Users, Award, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ReviewsSection = () => {
  const stats = [
    { icon: Download, label: 'Downloads', value: '50,000+', color: 'text-amber-600' },
    { icon: Users, label: 'Active Officiants', value: '12,500+', color: 'text-amber-600' },
    { icon: Award, label: 'Ceremonies Completed', value: '25,000+', color: 'text-amber-600' },
    { icon: Star, label: 'Average Rating', value: '4.9/5', color: 'text-amber-600' }
  ];

  const reviews = [
    {
      name: "Rev. Sarah Mitchell",
      role: "Wedding Officiant",
      location: "California",
      rating: 5,
      text: "Officiantbot has transformed my ceremony preparation process. The AI-generated scripts are incredibly personalized and professional. I've officiated over 200 weddings using this platform, and couples are always amazed by the quality.",
      avatar: "/placeholder.svg",
      ceremonies: "200+ ceremonies"
    },
    {
      name: "Pastor Michael Chen",
      role: "Ministry Leader",
      location: "Texas",
      rating: 5,
      text: "The legal compliance features saved me countless hours of research. As someone who officiates in multiple states, having all the marriage requirements in one place is invaluable. This is the most comprehensive officiant tool I've ever used.",
      avatar: "/placeholder.svg",
      ceremonies: "150+ ceremonies"
    },
    {
      name: "Dr. Amanda Rodriguez",
      role: "Wedding Celebrant",
      location: "Florida",
      rating: 5,
      text: "What sets Officiantbot apart is the variety of script styles. Whether it's a traditional church wedding or a beach ceremony, the AI adapts perfectly to each couple's vision. My clients consistently praise the personalized touch.",
      avatar: "/placeholder.svg",
      ceremonies: "180+ ceremonies"
    },
    {
      name: "Rev. James Thompson",
      role: "Ordained Minister",
      location: "New York",
      rating: 5,
      text: "I was skeptical about AI-generated content, but Officiantbot exceeded all expectations. The scripts feel authentic and heartfelt. The ceremony checklist feature ensures I never miss important details. Absolutely essential for any serious officiant.",
      avatar: "/placeholder.svg",
      ceremonies: "300+ ceremonies"
    },
    {
      name: "Emily Foster",
      role: "Wedding Coordinator",
      location: "Washington",
      rating: 5,
      text: "As a wedding planner, I recommend Officiantbot to all the officiants I work with. The professional tools and resources make ceremony planning seamless. The couples love the personalized scripts, and officiants appreciate the legal guidance.",
      avatar: "/placeholder.svg",
      ceremonies: "100+ weddings planned"
    },
    {
      name: "Rev. David Kim",
      role: "Interfaith Minister",
      location: "Oregon",
      rating: 5,
      text: "The cultural sensitivity and variety of ceremony types available is remarkable. I've used Officiantbot for Christian, Jewish, Hindu, and secular ceremonies. Each script respects the traditions while adding personal touches.",
      avatar: "/placeholder.svg",
      ceremonies: "120+ ceremonies"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Professional Officiants Worldwide
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of certified ministers, wedding celebrants, and professional officiants 
            who rely on Officiantbot for exceptional wedding ceremonies.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Professional Officiants Are Saying
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-amber-100 text-amber-600">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.role}</p>
                      <p className="text-xs text-gray-500">{review.location}</p>
                      <div className="flex items-center mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <Quote className="h-5 w-5 text-amber-600 mb-2" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.text}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                      {review.ceremonies}
                    </span>
                    <span>Verified Officiant</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-lg p-8 shadow-sm border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">99.2%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Based on 5,000+ reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
              <div className="text-sm text-gray-500 mt-1">Professional officiant assistance</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600 mb-2">50 States</div>
              <div className="text-gray-600">Legal Compliance</div>
              <div className="text-sm text-gray-500 mt-1">Updated marriage requirements</div>
            </div>
          </div>
        </div>

        {/* Featured in Section */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Featured In</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-lg font-bold text-gray-500">The Knot</div>
            <div className="text-lg font-bold text-gray-500">WeddingWire</div>
            <div className="text-lg font-bold text-gray-500">Brides Magazine</div>
            <div className="text-lg font-bold text-gray-500">Wedding Industry News</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
