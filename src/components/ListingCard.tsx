
import { Link } from "react-router-dom";
import { Listing } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Bed, Bath } from "lucide-react";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link to={`/listing/${listing.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow listing-card h-full">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge className="bg-white text-black hover:bg-white/90">
              ${listing.price}/night
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-medium text-lg line-clamp-1">{listing.title}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium ml-1">{listing.rating}</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <MapPin className="w-3 h-3 mr-1" />
            <span className="line-clamp-1">{listing.location}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="flex items-center text-xs">
              <Bed className="w-3 h-3 mr-1" />
              <span>{listing.bedrooms} {listing.bedrooms === 1 ? "bedroom" : "bedrooms"}</span>
            </div>
            <div className="flex items-center text-xs ml-2">
              <Bath className="w-3 h-3 mr-1" />
              <span>{listing.bathrooms} {listing.bathrooms === 1 ? "bathroom" : "bathrooms"}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {listing.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {listing.amenities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{listing.amenities.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
