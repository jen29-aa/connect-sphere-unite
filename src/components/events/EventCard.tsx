
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Event, User } from "@/types";

interface EventCardProps {
  event: Event;
  organizer: User;
}

export function EventCard({ event, organizer }: EventCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img
          src={event.imageUrl || "https://images.unsplash.com/photo-1523580494863-6f3031224c94"}
          alt={event.title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/events/${event.id}`}>
            <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">
              {event.title}
            </h3>
          </Link>
          <Badge>{event.category}</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <Calendar className="h-3.5 w-3.5" />
          <span>{event.date}, {event.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <MapPin className="h-3.5 w-3.5" />
          <span>{event.location.address}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {event.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex-col items-start">
        <div className="flex items-center gap-2 w-full mb-3">
          <Avatar className="h-6 w-6">
            <AvatarImage src={organizer.profileImageUrl} alt={organizer.name} />
            <AvatarFallback>{organizer.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm">Organized by <span className="font-medium">{organizer.name}</span></span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {event.attendeeIds.length} / {event.maxAttendees || "∞"} attending
            </span>
          </div>
          <Button>Join Event</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
